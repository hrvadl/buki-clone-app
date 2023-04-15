using System.Net;
using buki_api.modules.exception;
using Newtonsoft.Json;
namespace buki_api.modules.middlewares;

public class ExceptionHandlerMiddleware
{
    private readonly RequestDelegate next;
    private readonly IWebHostEnvironment env;

    public ExceptionHandlerMiddleware(RequestDelegate next, IWebHostEnvironment env)
    {
        this.next = next;
        this.env = env;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            ExceptionInfo info = GetExceptionInfo(ex);
            string infoJson = JsonConvert.SerializeObject(info);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)info.StatusCode;
            await context.Response.WriteAsync(infoJson);
        }
    }

    private ExceptionInfo GetExceptionInfo(Exception exception)
    {
        ExceptionInfo info = new();

        switch (exception)
        {
            case ValidationException validationException:
                info.StatusCode = HttpStatusCode.BadRequest;
                info.Message = validationException.Message;
                break;
            case NotFoundException notFoundException:
                info.StatusCode = HttpStatusCode.NotFound;
                info.Message = notFoundException.Message;

                break;
            case UnauthorizedException unauthorizedException:
                info.StatusCode = HttpStatusCode.Unauthorized;
                info.Message = unauthorizedException.Message;

                break;
            default:
                info.StatusCode = HttpStatusCode.InternalServerError;
                info.Message = exception.Message;

                break;
        }

        return info;
    }
}


public static class ExceptionMiddleware
{
    public static IApplicationBuilder UseHandleErrors(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<ExceptionHandlerMiddleware>();
    }
}