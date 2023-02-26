using System.Net;

namespace buki_api.modules.exception;

public class ExceptionInfo
{
    public ExceptionInfo() : base() { }

    public string Message { get; set; } = null!;

    public HttpStatusCode StatusCode { get; set; }
}