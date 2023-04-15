using buki_api.modules.auth.utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace buki_api.modules.auth;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService userService;
    private readonly ITokenService tokenService;
    public UserController(IUserService authService, ITokenService tokenService)
    {
        this.tokenService = tokenService;
        this.userService = authService;
    }

    [AllowAnonymous]
    [HttpPost("auth/sign-up")]
    public ActionResult<SignUpResponse> SignUp([FromBody] SignUpUserDTO user)
    {
        var result = this.userService.SignUp(user);

        return result ? Ok(new SignUpRes(true)) : BadRequest(new SignUpRes(false));
    }

    [AllowAnonymous]
    [HttpPost("auth/log-in")]
    public IActionResult LogIn([FromBody] AuthUserDTO user)
    {
        var result = this.userService.LogIn(user);
        return Ok(result);
    }

    [Authorize]
    [HttpGet("auth")]
    public IActionResult CheckToken([FromServices] UserContext userContext)
    {
        var result = this.userService.CheckToken(userContext);
        return Ok(result);
    }
    [Authorize]
    [HttpGet("{id}")]
    public IActionResult GetById([FromServices] UserContext userContext, int id)
    {
        var result = this.userService.GetUser(userContext, id);
        return Ok(result);
    }


    [Authorize]
    [HttpGet("search")]
    public IActionResult Find([FromQuery(Name = "name")] string name, [FromServices] UserContext userContext)
    {
        var res = this.userService.Find(userContext, name);

        return Ok(res);
    }
}