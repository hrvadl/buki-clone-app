namespace buki_api.entities;

public enum UserRole
{
    Teacher,
    Student
}

public class UserEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Number { get; set; } = null!;

    public string? Description { get; set; } = null!;

    public string Password { get; set; } = null!;

    public UserRole Role { get; set; }

    public List<AdEntity> Ads { get; set; } = null!;

    public List<ReviewEntity> GivenReviews { get; set; } = null!;

    public List<ReviewEntity> RecievedReviews { get; set; } = null!;
}