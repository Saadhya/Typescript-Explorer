# packages to be installed in api backend:-
dotnet new webapi -minimal 

swagger writes docs for your api
either useit directly:http://localhost:4000/weatherforecast
or call api in swagger- http://localhost:4000/swagger/index.html

dotnet add package Microsoft.EntityFrameworkCore.Sqlite


to install = dotnet tool install --global dotnet-ef
to check = dotnet tool list --global
then this
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet ef migrations add initial // here initial is the name of migration

ef migrations remove
dotnet ef database update
dotnet clean
dotnet build
- always update databse after migration
- dotnet ef migrations list


issue was with ";", (), and syntax of the method- OnModelCreating
then
dotnet run

Add this to consume the api on client side = builder.Services.AddCors();

# api validation
- always do server side validation because anything can be changed on client side browser by user
- client side validation prevents unnecessary api requests
- and give user immediate feedback
- install:- dotnet add package minivalidation

# adding bid, a new api entity
- dotnet ef migrations add bids
- dotnet build = to see errors
- made the endpoints reusable in cs file from program.cs




