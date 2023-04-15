using buki_api.db;
using buki_api.entities;
using buki_api.modules.ad;
using buki_api.modules.exception;
using buki_api.modules.hash;
using Microsoft.EntityFrameworkCore;

namespace buki_api.modules.auth;

public class UserService : IUserService
{
    DbSet<UserEntity> userRepository;
    MyDbContext context;
    IHashPassword hashService;
    ITokenService tokenService;

    public UserService(MyDbContext dbContext, IHashPassword _hashService, ITokenService _tokenService)
    {
        this.context = dbContext;
        this.userRepository = dbContext.Users;
        this.hashService = _hashService;
        this.tokenService = _tokenService;
    }

    public UserResponse LogIn(AuthUserDTO user)
    {
        var candidate = this.userRepository.Include(e => e.Favorites).ThenInclude(e => e.Author).Include(e => e.Ads).Include(e => e.RecievedReviews).ThenInclude(e => e.Reviewer).FirstOrDefault(u => u.Email == user.Email);


        if (candidate is null) throw new ValidationException("Incorrect email");

        bool isCorrectPassword = this.hashService.Verify(user.Password, candidate.Password);

        if (!isCorrectPassword) throw new ValidationException("Incorrect password");

        var token = this.tokenService.BuildToken(new UserDTO { Email = candidate.Email, Role = candidate.Role });

        var res = new UserResponse
        {
            Favorites = candidate.Favorites.ToList().ConvertAll(e => new AdResponse(e)),
            Name = candidate.Name,
            Email = candidate.Email,
            Password = candidate.Password,
            Role = candidate.Role,
            Token = token,
            RecievedReviews = candidate.RecievedReviews,
            Ads = candidate.Ads
        };

        return res;
    }

    public bool SignUp(SignUpUserDTO user)
    {
        if (user.Email is null || user.Password is null || user.Number is null || user.Name is null) throw new ValidationException("There's not enough data");

        var isAlreadyUsed = this.userRepository.FirstOrDefault(u => u.Email == user.Email || u.Number == user.Number);

        if (isAlreadyUsed is not null) throw new ValidationException("This user already exists");

        var newUser = new UserEntity
        {
            Email = user.Email,
            Password = this.hashService.Hash(user.Password),
            Name = user.Name,
            Number = user.Number,
            Role = user.Role
        };

        this.userRepository.Add(newUser);
        this.context.SaveChanges();

        return true;
    }

    public UserResponse CheckToken(UserContext userContext)
    {
        var user = this.userRepository.Include(e => e.Favorites).ThenInclude(e => e.Author).Include(e => e.Ads).Include(e => e.RecievedReviews).ThenInclude(e => e.Reviewer).FirstOrDefault(u => u.Email == userContext.Email);

        if (user is null) throw new UnauthorizedAccessException("Jwt token is not valid");

        var response = new UserResponse
        {
            Favorites = user.Favorites.ToList().ConvertAll(e => new AdResponse(e)),
            Email = user.Email,
            Name = user.Name,
            Password = user.Password,
            Role = user.Role,
            Token = userContext.Token,
            Ads = user.Ads,
            RecievedReviews = user.RecievedReviews
        };

        return response;
    }
    public UserEntity GetUser(UserContext ctx, int id)
    {
        var user = this.userRepository.Include(e => e.RecievedReviews).ThenInclude(r => r.Reviewer).Include(e => e.Ads).First(e => e.Id == id);

        return user;
    }


    public List<UserEntity> Find(UserContext userContext, string search)
    {
        var users = this.context.Users.Where(a => (a.Name.ToLower().Contains(search.ToLower()) || a.Email.ToLower().Contains(search.ToLower())) && a.Role != userContext.Role);

        return users.ToList();
    }
}