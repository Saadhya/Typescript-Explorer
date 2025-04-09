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
    await houseRepository.GetAllHousesAsync()
);

// app.MapGet("/houses", (HouseDbContext dbContext) =>
//     dbContext.Houses.Select(h=> new HouseDto
//     {
//         Id = h.Id,
//         Address = h.Address,
//         Country = h.Country,
//         Description = h.Description,
//         Price = h.Price,
//         Photo = h.Photo
//     }).ToList()
// );


app.Run();
