using Microsoft.EntityFrameworkCore;

public static class SeedData{
    public static void Seed(ModelBuilder modelBuilder){
        modelBuilder.Entity<HouseEntity>().HasData(
            new HouseEntity{Id=1,Address="123 Main St",Country="USA",Description="Beautiful house in the city",price=300000,Photo="house1.jpg"},
            new HouseEntity{Id=2,Address="456 Elm St",Country="USA",Description="Spacious house with a garden",price=400000,Photo="house2.jpg"},
            new HouseEntity{Id=3,Address="789 Oak St",Country="USA",Description="Modern house with a pool",price=500000,Photo="house3.jpg"}
        );
    }
}