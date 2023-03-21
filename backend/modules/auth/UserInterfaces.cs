using buki_api.entities;
using buki_api.modules.ad;
using buki_api.modules.review;

namespace buki_api.modules.auth;

public interface IUserService
{
    public Task<UserResponse> LogIn(AuthUserDTO user);
    public bool SignUp(SignUpUserDTO user);
    public Task<UserResponse> CheckToken(UserContext userContext);
    public UserEntity GetUser(UserContext userContext, int id);
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

public class UserResponse : AuthUserDTO
{
    public string Name { get; set; } = null!;
    public string Token { get; set; } = null!;
    public IEnumerable<AdResponse> Favorites { get; set; } = null!;
}

// public class GetUserResponse : UserDTO
// {
//     public string Name { get; set; } = null!;
//     public AdRe Ads
//     public List<ReviewEntity> Reviews { get; set; } = null!;
// }

public interface SignUpResponse
{
    public bool Success { get; set; }
}