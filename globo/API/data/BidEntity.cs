public class BidEntity{
    // primary key
    public int Id { get; set; }
    public int HouseId { get; set; }
    public string Bidder { get; set; }= string.Empty;
    public decimal Amount { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;  
    // foreign key for house entity- navigation property
    public HouseEntity House { get; set; } 
}