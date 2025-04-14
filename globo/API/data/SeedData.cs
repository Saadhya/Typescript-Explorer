using Microsoft.EntityFrameworkCore;

public static class SeedData{
    public static void Seed(ModelBuilder modelBuilder){
        modelBuilder.Entity<HouseEntity>().HasData(new List<HouseEntity>{
            new HouseEntity{Id=1,Address="123 Main St",Country="USA",Description="Beautiful house in the city",Price=300000,Photo="https://media.gettyimages.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=gi&k=20&c=ANSbtbaJgd_AQYLH0f7gp2eLgzXdal6UZrw3Lxqgeok="},
            new HouseEntity{Id=2,Address="456 Elm St",Country="USA",Description="Spacious house with a garden",Price=400000,Photo="https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w="},
            new HouseEntity{Id=3,Address="789 Oak St",Country="USA",Description="Modern house with a pool",Price=500000,Photo="https://media.gettyimages.com/id/1221023970/photo/small-red-brick-house-with-green-grass.jpg?s=612x612&w=0&k=20&c=pzU3H6V3-_LkKRbUNpexw45-WMfXdVTW5tCI2WE_R-8="},
            new HouseEntity{Id=4,Address="789 Oak St",Country="USA",Description="Modern house with a garden",Price=500000,Photo="https://media.gettyimages.com/id/1335269094/photo/modern-forest-house.jpg?s=612x612&w=0&k=20&c=4bAN2bVxMkV_vGs6BvegOFv7MmyTWvNDa2xBDQmrnWY="},
            new HouseEntity{Id=5,Address="789 Oak St",Country="USA",Description="Modern house with a gym",Price=500000,Photo="https://media.gettyimages.com/id/994966932/photo/tiny-house.jpg?s=612x612&w=0&k=20&c=f5xNEbBePU4TzV3GXaF4dm3fKN0yhoOtlh0W6e43W3Q="}

        });
        modelBuilder.Entity<BidEntity>().HasData(new List<BidEntity>{
            new BidEntity{Id=1,HouseId=1,Bidder="John Doe",Amount=310000,CreatedAt= new DateTime(2025, 04, 14)},
            new BidEntity{Id=2,HouseId=2,Bidder="Jane Smith",Amount=410000,CreatedAt= new DateTime(2025, 04, 14)},
            new BidEntity{Id=3,HouseId=3,Bidder="Alice Johnson",Amount=510000,CreatedAt= new DateTime(2025, 04, 14)},
            new BidEntity{Id=4,HouseId=4,Bidder="Alice Prety",Amount=620000,CreatedAt= new DateTime(2025, 04, 14)}

        });
         
    }
   
}