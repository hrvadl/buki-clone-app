using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using buki_api.modules.auth;
using Microsoft.IdentityModel.Tokens;

public interface ITokenService
{
    string BuildToken(UserDTO user);
}

public class TokenService : ITokenService
{
    private string Issuer;
    private string Key;
    private string Audience;
    public TokenService(IConfiguration configuration)
    {
        this.Issuer = configuration["Jwt:Issuer"]!;
        this.Key = configuration["Jwt:Key"]!;
        this.Audience = configuration["Jwt:Audience"]!;
    }

    public string BuildToken(UserDTO user)
    {
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role.ToString())
             }),
            Expires = DateTime.UtcNow.AddMonths(1),
            Issuer = this.Issuer,
            Audience = this.Audience,
            SigningCredentials = new SigningCredentials
            (new SymmetricSecurityKey(Encoding.ASCII.GetBytes
        (this.Key)),
            SecurityAlgorithms.HmacSha512Signature)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var jwtToken = tokenHandler.WriteToken(token);
        var stringToken = tokenHandler.WriteToken(token);
        return stringToken;
    }
}