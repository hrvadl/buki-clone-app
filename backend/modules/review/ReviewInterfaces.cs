using buki_api.entities;
namespace buki_api.modules.review;

public interface IReviewService
{
    public List<ReviewEntity> GetAll();

    public ReviewEntity Add(ReviewDTO review, UserContext ctx);
}

public class ReviewDTO
{
    public string Text { get; set; } = null!;
    public int RevieweeId { get; set; }
}