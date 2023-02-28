using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace buki_api.modules.auth;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService authService;
    private readonly ITokenService tokenService;
    public AuthController(IAuthService authService, ITokenService tokenService)
    {
        this.tokenService = tokenService;
        this.authService = authService;
    }

    [HttpPost("sign-up")]
    public async Task<ActionResult<string>> SignUp()
    {
        return this.authService.test();
    }

    [HttpPost("log-in")]
    public async Task<IActionResult> LogIn([FromBody] UserDTO user)
    {
        var token = this.tokenService.BuildToken(user);
        return Ok(token);
    }

    [Authorize]
    [HttpGet]
    public async Task<ActionResult<string>> CheckToken()
    {
        return this.authService.test();
    }

    [HttpGet("test")]
    public async Task<ActionResult<string>> Test()
    {
        return this.authService.test();
    }
}