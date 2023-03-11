using buki_api.db;
using buki_api.entities;
using buki_api.modules.exception;

namespace buki_api.modules.ad;

public class AdService : IAdService
{
    private MyDbContext dbContext;

    public AdService(MyDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<AdEntity> GetAll(UserContext userContext)
    {
        var res = this.dbContext.Ads.Where(a => a.Author.Role != userContext.Role).ToList();

        return res;
    }

    public AddResponse Add(UserContext userContext, AddAdDTO ad)
    {
        var author = this.dbContext.Users.FirstOrDefault(u => u.Email == userContext.Email);

        if (author is null) throw new ValidationException("Cannot find author of the ad");

        var newAd = new AdEntity
        {
            AuthorId = author.Id,
            Description = ad.Description,
            Subject = ad.Subject
        };

        var res = this.dbContext.Ads.Add(newAd);
        this.dbContext.SaveChanges();

        return new AddResponse(newAd);
    }

    public AdEntity GetById(int id)
    {
        var ad = this.dbContext.Ads.FirstOrDefault(e => e.Id == id);

        return ad!;
    }
}