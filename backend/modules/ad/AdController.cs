using buki_api.entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace buki_api.modules.ad;

[Route("api/ad")]
[ApiController]
public class AdController : ControllerBase
{
    private IAdService adService;
    public AdController(IAdService adService)
    {
        this.adService = adService;
    }

    [Authorize]
    [HttpPost]
    public IActionResult AddAd([FromServices] UserContext userContext, [FromBody] AddAdDTO adDTO)
    {
        var result = this.adService.Add(userContext, adDTO);

        return Ok(result);
    }

    [Authorize]
    [HttpGet("/{id}")]
    public IActionResult GetById(int id)
    {
        var result = this.adService.GetById(id);

        return Ok(result);
    }

    [Authorize]
    [HttpGet]
    public IActionResult GetAll([FromQuery(Name = "subject")] Subject? subject, [FromServices] UserContext userContext)
    {
        var result = this.adService.GetAll(userContext, subject);

        return Ok(result);
    }

    [Authorize]
    [HttpGet("top")]
    public IActionResult GetTop([FromServices] UserContext userContext)
    {
        var result = this.adService.GetTop(userContext);

        return Ok(result);
    }


    [Authorize]
    [HttpPost("like/{id}")]
    public IActionResult Like([FromServices] UserContext userContext, int id)
    {
        var result = this.adService.Like(userContext, id);

        return Ok(result);
    }


    [Authorize]
    [HttpPost("unlike/{id}")]
    public IActionResult Unlike([FromServices] UserContext userContext, int id)
    {
        var result = this.adService.Unlike(userContext, id);

        return Ok(result);
    }
}