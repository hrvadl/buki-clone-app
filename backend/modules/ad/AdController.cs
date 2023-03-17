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
    public IActionResult GetAdById(int id)
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
}