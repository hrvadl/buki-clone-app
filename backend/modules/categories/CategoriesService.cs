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

    public List<CategoryResponse> GetAll()
    {
        var result = this.context.Ads.GroupBy(e => e.Subject).ToList();

        return result.ConvertAll(i => new CategoryResponse
        {
            AdQuantity = i.Count(),
            Name = i.Key
        });
    }
}