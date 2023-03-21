using buki_api.db;
using buki_api.entities;
using buki_api.modules.exception;
using Microsoft.EntityFrameworkCore;

namespace buki_api.modules.review;

public class ReviewService : IReviewService
{
    MyDbContext dbCtx;
    public ReviewService(MyDbContext dbCtx)
    {
        this.dbCtx = dbCtx;
    }

    public List<ReviewEntity> GetAll(int id)
    {
        var reviews = this.dbCtx.Reviews.Include(r => r.Reviewer).Where(e => e.Reviewee.Id == id);

        return reviews.ToList();
    }

    public ReviewEntity Add(ReviewDTO review, UserContext ctx)
    {
        var reviewee = this.dbCtx.Users.Include(r => r.RecievedReviews).First(r => r.Id == review.RevieweeId);

        if (reviewee is null) throw new ValidationException("Reviewee not found");

        var reviewer = this.dbCtx.Users.Include(r => r.GivenReviews).First(e => e.Email == ctx.Email);

        if (reviewer is null) throw new ValidationException("Reviewer not found");

        var newReview = new ReviewEntity
        {
            Reviewee = reviewee,
            Reviewer = reviewer,
            Text = review.Text,
            Rate = review.Rate
        };

        reviewee.RecievedReviews.Add(newReview);

        this.dbCtx.SaveChanges();

        return newReview;
    }
}