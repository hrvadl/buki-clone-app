using buki_api.entities;
using buki_api.modules.auth;

namespace buki_api.modules.ad;

public interface IAdService
{
    public List<AddResponse> GetAll(UserContext userContext, Subject? subject);

    public AdEntity GetById(int id);

    public AddResponse Add(UserContext userContext, AddAdDTO ad);
}

public class UserWithoutRelation
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Number { get; set; } = null!;


    public UserRole Role { get; set; }

    public UserWithoutRelation(UserEntity user)
    {
        this.Email = user.Email;
        this.Id = user.Id;
        this.Name = user.Name;
        this.Role = user.Role;
        this.Number = user.Number;
    }
}

public class AddResponse
{
    public int Id { get; set; }

    public Subject Subject { get; set; }

    public UserWithoutRelation Author { get; set; } = null!;
    public string Description { get; set; } = null!;
    public AddResponse(AdEntity ad)
    {
        this.Id = ad.Id;
        this.Subject = ad.Subject;
        this.Description = ad.Description;
        this.Author = new UserWithoutRelation(ad.Author);
    }
}

public class AddAdDTO
{
    public string Description { get; set; } = null!;

    public Subject Subject { get; set; }

}