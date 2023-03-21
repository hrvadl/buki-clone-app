namespace buki_api.entities;

public class ReviewEntity
{
    public int Id { get; set; }

    public string Text { get; set; } = null!;

    public int Rate { get; set; }

    public UserEntity Reviewer { get; set; } = null!;

    public int ReviewerId { get; set; }

    public UserEntity Reviewee { get; set; } = null!;

    public int RevieweeId { get; set; }
}