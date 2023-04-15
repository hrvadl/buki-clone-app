namespace buki_api.modules.exception;

public class ValidationException : Exception
{
    public ValidationException(string message) : base(message) { }
}