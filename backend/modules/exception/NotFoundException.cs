namespace buki_api.modules.exception;

public class NotFoundException : Exception
{
    public NotFoundException(string message) : base(message) { }
}