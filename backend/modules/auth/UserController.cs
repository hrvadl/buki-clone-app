using buki_api.modules.auth.utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace buki_api.modules.auth;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService authService;
    private readonly ITokenService tokenService;
    public UserController(IUserService authService, ITokenService tokenService)
    {
        this.tokenService = tokenService;
        this.authService = authService;
    }

    [AllowAnonymous]
    [HttpPost("auth/sign-up")]
    public ActionResult<SignUpResponse> SignUp([FromBody] SignUpUserDTO user)
    {
        var result = this.authService.SignUp(user);

        return result ? Ok(new SignUpRes(true)) : BadRequest(new SignUpRes(false));
    }

    [AllowAnonymous]
    [HttpPost("auth/log-in")]
    public async Task<IActionResult> LogIn([FromBody] AuthUserDTO user)
    {
        var result = await this.authService.LogIn(user);
        return Ok(result);
    }

    [Authorize]
    [HttpGet("auth")]
    public async Task<IActionResult> CheckToken([FromServices] UserContext userContext)
    {
        var result = await this.authService.CheckToken(userContext);
        return Ok(result);
    }
    [Authorize]
    [HttpGet("{id}")]
    public IActionResult GetById([FromServices] UserContext userContext, int id)
    {
        var result = this.authService.GetUser(userContext, id);
        return Ok(result);
    }
}