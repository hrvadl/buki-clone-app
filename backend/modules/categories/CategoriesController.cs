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
    public IActionResult GetAllCategories()
    {
        var result = this.categoryService.GetAll();

        return Ok(result);
    }
}