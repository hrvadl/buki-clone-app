using buki_api.entities;
using Microsoft.AspNetCore.Mvc;
namespace buki_api.modules.review;

[Route("api/review")]
[ApiController]
public class ReviewController : ControllerBase
{
    IReviewService reviewService;
    public ReviewController(IReviewService reviewService)
    {
        this.reviewService = reviewService;
    }

    [HttpGet]
    public IActionResult GetAllReviews()
    {
        var result = this.reviewService.GetAll();

        return Ok(result);
    }

    [HttpPost]
    public IActionResult AddReview([FromServices] UserContext userContext, [FromBody] ReviewDTO reviewDTO)
    {
        var result = this.reviewService.Add(reviewDTO, userContext);

        return Ok(result);
    }
}
