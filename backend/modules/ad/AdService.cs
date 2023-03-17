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

    public List<AddResponse> GetAll(UserContext userContext, Subject? subject)
    {
        var query = this.dbContext.Ads.Include(e => e.Author).Where(a => a.Author.Role != userContext.Role);

        if (subject is not null) query = query.Where(a => a.Subject == subject);

        return query.Select(e => new AddResponse(e)).ToList();
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