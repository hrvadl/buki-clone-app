using buki_api.db;
using buki_api.modules.auth;
using buki_api.modules.middlewares;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<MyDbContext>(options =>
{
    var connectionString = configuration.GetConnectionString("DbConnectionString")!;
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

builder.Services.AddControllers();
builder.Services.AddSingleton<IAuthService, AuthService>();

var app = builder.Build();

app.UseHandleErrors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
