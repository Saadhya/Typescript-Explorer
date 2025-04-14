using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using MiniValidation;

public static class WebApplicationHouseExtension
{
    public static void MapHouseEndpoints(this WebApplication app)
    {
        app.MapGet("/houses", async (IHouseRepository houseRepository) =>
            await houseRepository.GetAllHouses()
        ).Produces<HouseDto>(StatusCodes.Status200OK);

        app.MapGet("/house/{houseId:int}", async (int houseId, IHouseRepository houseRepository) =>{
            var house = await houseRepository.GetHouseById(houseId);
            if (house == null)
                return Results.Problem($"House with ID {houseId} not found", statusCode: 404);
            return Results.Ok(house);
        }).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status200OK);

        app.MapPost("/house", async ([FromBody]HouseDetailDto dto, IHouseRepository repo) =>{
            if(!MiniValidator.TryValidate(dto, out var errors)){
                return Results.ValidationProblem(errors);
            }
            var newHouse= repo.Add(dto);
            return Results.Created($"/houses/{newHouse.Id}", newHouse);

        }).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status201Created)
        .ProducesValidationProblem();

        app.MapPut("/houses", async ([FromBody]HouseDetailDto dto, IHouseRepository repo) =>{
            if(!MiniValidator.TryValidate(dto, out var errors)){
                return Results.ValidationProblem(errors);
            }
            if(await repo.GetHouseById(dto.Id) == null){
                return Results.Problem($"House with ID {dto.Id} not found", statusCode: 404);
            }
            var updatedHouse = await repo.Update(dto);
            return Results.Ok(updatedHouse);
        }).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status200OK).ProducesValidationProblem();

        app.MapDelete("/house/{houseId:int}", async (int houseId, IHouseRepository repo) =>{
            if(await repo.GetHouseById(houseId) == null){
                return Results.Problem($"House with ID {houseId} not found", statusCode: 404);
            }
            await repo.Delete(houseId);
            return Results.Ok();
        }).ProducesProblem(404).Produces(StatusCodes.Status200OK);

    }   
}