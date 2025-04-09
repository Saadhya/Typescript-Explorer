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


issue was with ";", (), and syntax of the method- OnModelCreating
then
dotnet run

Add this to consume the api on client side = builder.Services.AddCors();



