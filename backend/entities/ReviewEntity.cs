namespace buki_api.entities;

public class ReviewEntity
{
    public int Id { get; set; }

    public string Text { get; set; } = null!;

    public UserEntity Author { get; set; } = null!;

    public int AuthorId { get; set; }

    public UserEntity Receiver { get; set; } = null!;

    public int ReceiverId { get; set; }
}