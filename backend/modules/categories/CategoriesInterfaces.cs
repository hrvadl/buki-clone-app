using buki_api.entities;
namespace buki_api.modules.categories;

public class CategoryResponse
{
    public Subject Name { get; set; }
    public int AdQuantity { get; set; }
}

public class GetCategoryDTO
{
    public Subject Name { get; set; }
}

public interface ICategoryService
{
    public List<CategoryResponse> GetAll(UserContext ctx);
}