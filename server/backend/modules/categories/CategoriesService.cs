using buki_api.db;
using buki_api.entities;
using Microsoft.EntityFrameworkCore;

namespace buki_api.modules.categories;

public class CategoriesService : ICategoryService
{
    private MyDbContext context;
    public CategoriesService(MyDbContext context)
    {
        this.context = context;
    }

    public List<CategoryResponse> GetAll(UserContext ctx)
    {
        var result = this.context.Ads.Where(e => e.Author.Role != ctx.Role).GroupBy(e => e.Subject).ToList();

        return result.ConvertAll(i => new CategoryResponse
        {
            AdQuantity = i.Count(),
            Name = i.Key
        });
    }
}