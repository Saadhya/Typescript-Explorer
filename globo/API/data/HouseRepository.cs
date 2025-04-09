using Microsoft.EntityFrameworkCore;

public interface IHouseRepository{
    Task<List<HouseDto>> GetAllHousesAsync();
}
    
public class HouseRepository: IHouseRepository{
   
    private readonly HouseDbContext _context;

    // constructor
    public HouseRepository(HouseDbContext context){
        _context = context;
    }
    public async Task<List<HouseDto>> GetAllHousesAsync(){
        return await _context.Houses.Select(h => new HouseDto(h.Id, h.Address, h.Country, h.Description, h.price, h.Photo)).ToListAsync();
    }
}