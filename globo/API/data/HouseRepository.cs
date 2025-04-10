using Microsoft.EntityFrameworkCore;

public interface IHouseRepository{
    Task<List<HouseDto>> GetAllHouses();
    Task<HouseDetailDto?> GetHouseById(int id);
    Task<HouseDetailDto> Add(HouseDetailDto dto);
    Task<HouseDetailDto> Update(HouseDetailDto dto);
    Task Delete(int id);
}
    
public class HouseRepository: IHouseRepository{
   
    private readonly HouseDbContext _context;

 // constructor
    public HouseRepository(HouseDbContext context){
        _context = context;
    }

    private static void DtoToEntity(HouseDetailDto dto, HouseEntity e){
        e.Address= dto.Address;
        e.Country= dto.Country;
        e.Description= dto.Description;
        e.Price= dto.Price;
        e.Photo= dto.Photo;
    }
    private static HouseDetailDto EntityToDetailDto(HouseEntity e){
        return new HouseDetailDto(e.Id, e.Address, e.Country, e.Description, e.Price, e.Photo);
    }
   
    public async Task<List<HouseDto>> GetAllHouses(){
        return await _context.Houses.Select(h => new HouseDto(h.Id, h.Address, h.Country, h.Description, h.Price, h.Photo)).ToListAsync();
    }
    public async Task<HouseDetailDto?> GetHouseById(int id){
        var house = await _context.Houses.SingleOrDefaultAsync((h)=>h.Id==id);

        if(house == null){
            return null;
        }
        return EntityToDetailDto(house);
    }

    public async Task<HouseDetailDto> Add(HouseDetailDto house){
        var entity = new HouseEntity();
        DtoToEntity(house, entity);
        _context.Houses.Add(entity);
        await _context.SaveChangesAsync();
        return EntityToDetailDto(entity);
    }

    public async Task<HouseDetailDto> Update(HouseDetailDto house){
        // var entity = await _context.Houses.SingleOrDefaultAsync((h)=>h.Id==house.Id);
        var entity = await _context.Houses.FindAsync(house.Id);

        if(entity == null){
            throw new Exception($"Error updating house with ID {house.Id} ");
        }
        DtoToEntity(house, entity);

        // to tell to the entityframework that entity is modified
        _context.Entry(entity).State= EntityState.Modified;
        await _context.SaveChangesAsync();
        return EntityToDetailDto(entity);
    }

    public async Task Delete(int id){
        var entity = await _context.Houses.FindAsync(id);
        if(entity == null){
            throw new Exception($"House with ID {id} not found");
        }
        _context.Houses.Remove(entity);
        await _context.SaveChangesAsync();
    }

}