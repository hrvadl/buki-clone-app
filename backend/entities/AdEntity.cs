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

    public UserEntity Author { get; set; } = null!;

    public int AuthorId { get; set; }

    public string Description { get; set; } = null!;
}