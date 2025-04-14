using Microsoft.EntityFrameworkCore;

public interface IBidRepository{
    Task<List<BidDto>> Get(int houseId);
    Task<BidDto> Add(BidDto bid);
}

public class BidRepository:IBidRepository{
    private readonly HouseDbContext _context;
    public BidRepository(HouseDbContext context){
        _context=context;
    }
    public async Task<List<BidDto>> Get(int houseId){
        return await _context.Bids.Where(x=>x.HouseId==houseId).Select(x=>new BidDto(
            x.Id,
            x.HouseId,
            x.Bidder,
            x.Amount
        )).ToListAsync();
    }
    public async Task<BidDto> Add(BidDto bid){
        var entity = new BidEntity();
        entity.HouseId=bid.HouseId;
        entity.Bidder=bid.Bidder;
        entity.Amount=bid.Amount;
        _context.Bids.Add(entity);
        await _context.SaveChangesAsync();
        return new BidDto(entity.Id, entity.HouseId, entity.Bidder, entity.Amount );
    }
}