using buki_api.db;
using buki_api.entities;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace buki_api.tests;

public class TestBase
{
    public MyDbContext Context { get; private set; } = null!;

    public static AdEntity studentAd = new AdEntity { AuthorId = 1, Id = 1, Description = "Some description", Subject = Subject.Chemistry };
    public static AdEntity teacherAd = new AdEntity { AuthorId = 2, Id = 2, Description = "Some description", Subject = Subject.IT };

    public static ReviewEntity teacherReviews = new ReviewEntity { Id = 1, Rate = 5, RevieweeId = 1, ReviewerId = 2, Text = "test" };

    public static UserEntity student = new UserEntity { Email = "student@test.com", Name = "Vadym", Description = "Some description", Id = 1, Role = UserRole.Student, Password = "123", Number = "0660800552", Ads = new List<AdEntity>() { studentAd }, RecievedReviews = new List<ReviewEntity>() { teacherReviews } };
    public static UserEntity teacher = new UserEntity { Email = "teacher@test.com", Name = "Prepod", Description = "Some description for teacher", Id = 2, Role = UserRole.Teacher, Password = "123", Number = "0660800553", Ads = new List<AdEntity>() { teacherAd }, GivenReviews = new List<ReviewEntity>() { teacherReviews } };

    public TestBase()
    {
        Context = CreateDbContext();
    }

    private MyDbContext CreateDbContext()
    {
        var cnn = new SqliteConnection("Filename=:memory:");
        cnn.Open();
        var options = new DbContextOptionsBuilder<MyDbContext>().UseSqlite(cnn).Options;

        var context = new MyDbContext(options);
        context.Database.EnsureCreated();

        context.AddRange(new List<UserEntity>() { student, teacher });
        context.AddRange(new List<AdEntity>() { teacherAd, studentAd });
        context.AddRange(new List<ReviewEntity>() { teacherReviews });

        context.SaveChanges();
        return context;
    }
}
