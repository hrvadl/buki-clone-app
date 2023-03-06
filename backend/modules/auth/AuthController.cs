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

    [AllowAnonymous]
    [HttpPost("sign-up")]
    public async Task<ActionResult<string>> SignUp([FromBody] SignUpUserDTO user)
    {
        var result = await this.authService.SignUp(user);

        return result ? Ok("Success") : BadRequest("Something went wrong...");
    }

    [AllowAnonymous]
    [HttpPost("log-in")]
    public async Task<IActionResult> LogIn([FromBody] AuthUserDTO user)
    {
        var result = await this.authService.LogIn(user);
        return Ok(result);
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> CheckToken([FromServices] UserContext userContext)
    {
        var result = await this.authService.CheckToken(userContext);
        return Ok(result);
    }
}