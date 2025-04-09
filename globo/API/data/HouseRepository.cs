using Microsoft.EntityFrameworkCore;

public interface IHouseRepository{
    Task<List<HouseDto>> GetAllHouses();
    Task<HouseDetailDto?> GetHouseById(int id);
}
    
public class HouseRepository: IHouseRepository{
   
    private readonly HouseDbContext _context;

    // constructor
    public HouseRepository(HouseDbContext context){
        _context = context;
    }
    public async Task<List<HouseDto>> GetAllHouses(){
        return await _context.Houses.Select(h => new HouseDto(h.Id, h.Address, h.Country, h.Description, h.price, h.Photo)).ToListAsync();
    }
    public async Task<HouseDetailDto?> GetHouseById(int id){
        var house = await _context.Houses.SingleOrDefaultAsync((h)=>h.Id==id);

        if(house == null){
            return null;
        }
        return new HouseDetailDto(house.Id, house.Address, house.Country, house.Description, house.price, house.Photo);
    }
}