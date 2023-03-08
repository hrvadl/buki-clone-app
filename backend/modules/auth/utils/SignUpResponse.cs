using buki_api.modules.auth;
namespace buki_api.modules.auth.utils;


public class SignUpRes : SignUpResponse
{
    public bool Success { get; set; }
    public SignUpRes(bool success)
    {
        this.Success = success;
    }
}