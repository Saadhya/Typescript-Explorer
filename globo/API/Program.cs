using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddDbContext<HouseDbContext>(o=>
    o.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)
);
builder.Services.AddScoped<IHouseRepository, HouseRepository>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(p=>p.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod());
// app.UseCors(o=>o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

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
    var newHouse= repo.Add(dto);
    return Results.Created($"/houses/{newHouse.Id}", newHouse);

}).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status201Created);

app.MapPut("/houses", async ([FromBody]HouseDetailDto dto, IHouseRepository repo) =>{
    if(await repo.GetHouseById(dto.Id) == null){
        return Results.Problem($"House with ID {dto.Id} not found", statusCode: 404);
    }
    var updatedHouse = await repo.Update(dto);
    return Results.Ok(updatedHouse);
}).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status200OK);

app.MapDelete("/house/{houseId:int}", async (int houseId, IHouseRepository repo) =>{
    if(await repo.GetHouseById(houseId) == null){
        return Results.Problem($"House with ID {houseId} not found", statusCode: 404);
    }
    await repo.Delete(houseId);
    return Results.Ok();
}).ProducesProblem(404).Produces(StatusCodes.Status200OK);


app.Run();
