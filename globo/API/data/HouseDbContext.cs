using Microsoft.EntityFrameworkCore;

public class HouseDbContext: DbContext
{
    public HouseDbContext(DbContextOptions<HouseDbContext> options) : base(options){}

    // public DbSet<HouseEntity> Houses =Set<HouseEntity>();
    public DbSet<HouseEntity> Houses { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        optionsBuilder.UseSqlite($"Data Source={path}/houses.db");
        // optionsBuilder.UseSqlite($"Data Source={Path.join(path, "houses.db")}");

        // optionsBuilder.UseSqlServer("Server=DESKTOP-6O2OJ8O;Database=HouseDb;Trusted_Connection=True;TrustServerCertificate=True");
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        SeedData.Seed(builder);
    }
}