namespace buki_api.entities;

public enum Subject
{
    Physics,
    IT,
    Chemistry,
    Math
}

public class AdEntity
{
    public int Id { get; set; }

    public Subject Subject { get; set; }
    public int AuthorId { get; set; }
    public UserEntity Author { get; set; } = null!;

    public string Description { get; set; } = null!;

    public ICollection<UserEntity> LikedBy { get; set; } = null!;

}