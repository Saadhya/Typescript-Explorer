using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using MiniValidation;

public static class WebApplicationBidExtension
{
    public static void MapBidEndpoints(this WebApplication app)
    {

        app.MapGet("/house/{houseId:int}/bids", async (int houseId, IHouseRepository houseRepo, IBidRepository bidRepository) =>{
            if(await houseRepo.GetHouseById(houseId) == null){
                return Results.Problem($"House with ID {houseId} not found", statusCode: 404);
            }
            var bids = await bidRepository.Get(houseId);
            return Results.Ok(bids);
        }).Produces<BidDto>(StatusCodes.Status200OK).ProducesProblem(404);

        app.MapPost("/house/{houseId:int}/bid", async (int houseId, [FromBody]BidDto dto, IBidRepository bidRepository) =>{
            if(dto.HouseId != houseId){
                return Results.Problem($"No match for ({houseId}) in body ({dto.HouseId})", statusCode: StatusCodes.Status400BadRequest);
            }
            if(!MiniValidator.TryValidate(dto, out var errors)){
                return Results.ValidationProblem(errors);
            }
            var newBid = bidRepository.Add(dto);
            return Results.Created($"/house/{houseId}/bids", newBid);
        }).ProducesProblem(404).Produces<BidDto>(StatusCodes.Status201Created).ProducesValidationProblem();

    }
}