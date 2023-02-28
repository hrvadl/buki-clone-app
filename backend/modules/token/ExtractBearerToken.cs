using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using buki_api.entities;
using Newtonsoft.Json;

public class UserContext
{
    public string Email { get; set; } = null!;
    public UserRole Role { get; set; }
}


public class ExtractTokenMiddleware
{
    private readonly RequestDelegate next;

    public ExtractTokenMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task Invoke(HttpContext context, UserContext userContext)
    {
        var token = context.Request?.Headers?.Authorization.FirstOrDefault()?.Split()[1];

        if (token is not null)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwt = handler.ReadJwtToken(token);
            var name = jwt.Claims.First(claim => claim.Type == ClaimTypes.Email).Value;
            var role = jwt.Claims.First(claim => claim.Type == ClaimTypes.Role).Value;
            userContext.Email = name;
            userContext.Role = Enum.Parse<UserRole>(role);
        }

        await next(context);
    }
}