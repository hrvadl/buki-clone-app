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


}