using buki_api.entities;

namespace buki_api.modules.auth;

public interface IAuthService
{
    public Task<LogInResponse> LogIn(AuthUserDTO user);
    public bool SignUp(SignUpUserDTO user);
    public Task<LogInResponse> CheckToken(UserContext userContext);
}

public class UserDTO
{
    public string Email { get; set; } = null!;
    public UserRole Role { get; set; }
}

public class AuthUserDTO : UserDTO
{
    public string Password { get; set; } = null!;
}

public class SignUpUserDTO : AuthUserDTO
{
    public string Name { get; set; } = null!;
    public string Number { get; set; } = null!;
}

public class LogInResponse : AuthUserDTO
{
    public string Name { get; set; } = null!;
    public string Token { get; set; } = null!;
    public List<UserEntity> Favorites { get; set; } = null!;
}

public interface SignUpResponse
{
    public bool Success { get; set; }
}