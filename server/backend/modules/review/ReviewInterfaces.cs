using buki_api.entities;
namespace buki_api.modules.review;

public interface IReviewService
{
    public List<ReviewEntity> GetAll(int id);

    public ReviewEntity Add(ReviewDTO review, UserContext ctx);
    public ReviewEntity Delete(UserContext ctx, int id);

}

public class ReviewDTO
{
    public string Text { get; set; } = null!;
    public int RevieweeId { get; set; }
    public int Rate { get; set; }

}

public class ReviewWithoutReviewee
{
    public int Id { get; set; }

    public string Text { get; set; } = null!;

    public UserEntity Reviewer { get; set; } = null!;
}