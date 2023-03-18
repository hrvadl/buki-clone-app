using buki_api.db;
using buki_api.entities;
using buki_api.modules.exception;
using Microsoft.EntityFrameworkCore;

namespace buki_api.modules.ad;

public class AdService : IAdService
{
    private MyDbContext dbContext;

    public AdService(MyDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public List<AdResponse> GetAll(UserContext userContext, Subject? subject)
    {
        var query = this.dbContext.Ads.Include(e => e.Author).Where(a => a.Author.Role != userContext.Role);

        if (subject is not null) query = query.Where(a => a.Subject == subject);

        return query.Select(e => new AdResponse(e)).ToList();
    }

    public List<AdResponse> GetTop(UserContext userContext)
    {
        return this.dbContext.Ads.Include(e => e.Author).Where(a => a.Author.Role != userContext.Role).Take(3).Select(e => new AdResponse(e)).ToList();
    }

    public AdResponse Add(UserContext userContext, AddAdDTO ad)
    {
        var author = this.dbContext.Users.Include(u => u.Ads).FirstOrDefault(u => u.Email == userContext.Email);

        if (author is null) throw new ValidationException("Cannot find author of the ad");

        if (author.Ads.Any(a => a.Subject == ad.Subject)) throw new ValidationException("You cannot create 2 same ads");

        var newAd = new AdEntity
        {
            AuthorId = author.Id,
            Description = ad.Description,
            Subject = ad.Subject
        };

        var res = this.dbContext.Ads.Add(newAd);
        this.dbContext.SaveChanges();

        return new AdResponse(newAd);
    }

    public AdResponse GetById(int id)
    {
        var ad = this.dbContext.Ads.Include(e => e.Author).FirstOrDefault(e => e.Id == id);

        return new AdResponse(ad!);
    }
}