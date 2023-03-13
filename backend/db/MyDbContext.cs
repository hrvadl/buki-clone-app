using System.Data;
using buki_api.entities;
using Microsoft.EntityFrameworkCore;
namespace buki_api.db;

public class MyDbContext : DbContext
{
    public MyDbContext() { }

    public MyDbContext(DbContextOptions<MyDbContext> opt) : base(opt) { }

    public DbSet<ReviewEntity> Reviews { get; set; } = null!;

    public DbSet<UserEntity> Users { get; set; } = null!;

    public DbSet<AdEntity> Ads { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<ReviewEntity>().HasOne(e => e.Reviewee).WithMany(e => e.RecievedReviews).HasForeignKey(e => e.RevieweeId);

        modelBuilder.Entity<ReviewEntity>().HasOne(e => e.Reviewer).WithMany(e => e.GivenReviews).HasForeignKey(e => e.ReviewerId);
    }
}