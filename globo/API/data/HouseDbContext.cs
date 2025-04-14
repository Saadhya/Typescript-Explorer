using Microsoft.EntityFrameworkCore;

public class HouseDbContext: DbContext
{
    public HouseDbContext(DbContextOptions<HouseDbContext> options) : base(options){}

    // 2 different ways to create a DbSet
    public DbSet<HouseEntity> Houses { get; set; }
    public DbSet<BidEntity> Bids {get; set;}
    // public DbSet<BidEntity> Bids => Set<BidEntity>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        optionsBuilder.UseSqlite($"Data Source={path}/app.db");
        // optionsBuilder.UseSqlite($"Data Source={Path.join(path, "houses.db")}");

        // optionsBuilder.UseSqlServer("Server=DESKTOP-6O2OJ8O;Database=HouseDb;Trusted_Connection=True;TrustServerCertificate=True");
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        SeedData.Seed(builder);
    }
}