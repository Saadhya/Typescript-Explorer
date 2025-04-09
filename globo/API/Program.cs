using Microsoft.EntityFrameworkCore;

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


app.Run();
