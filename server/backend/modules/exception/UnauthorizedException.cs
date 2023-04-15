namespace buki_api.modules.exception;

public class UnauthorizedException : Exception
{
    public UnauthorizedException(string message) : base(message) { }
}