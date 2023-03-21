using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
namespace buki_api.modules.categories;

[Route("api/categories")]
[ApiController]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryService categoryService;
    public CategoriesController(ICategoryService categoryService)
    {
        this.categoryService = categoryService;
    }

    [Authorize]
    [HttpGet]
    public IActionResult GetAllCategories([FromServices] UserContext ctx)
    {
        var result = this.categoryService.GetAll(ctx);

        return Ok(result);
    }
}