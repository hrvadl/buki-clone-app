namespace buki_api.entities;

public class RevieweeEntity
{
    public int Id { get; set; }

    public ReviewEntity Review { get; set; } = null!;

    public int ReviewId;
}