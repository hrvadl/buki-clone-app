using buki_api.modules.exception;
using Microsoft.AspNetCore.Mvc;
namespace buki_api.modules.auth;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _AuthService;
    public AuthController(IAuthService AuthService)
    {
        this._AuthService = AuthService;
    }

    [HttpGet]
    public async Task<ActionResult<string>> test()
    {

        throw new UnauthorizedException("Unauthorized");
        return this._AuthService.test();
    }

    [HttpPost]
    public async Task<ActionResult<string>> SignUp()
    {
        return this._AuthService.test();
    }

    [HttpPost]
    public async Task<ActionResult<string>> LogIn()
    {
        return this._AuthService.test();
    }
}