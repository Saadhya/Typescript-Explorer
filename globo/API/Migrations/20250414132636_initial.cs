using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Houses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Address = table.Column<string>(type: "TEXT", nullable: true),
                    Country = table.Column<string>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    Photo = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Houses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Bids",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    HouseId = table.Column<int>(type: "INTEGER", nullable: false),
                    Bidder = table.Column<string>(type: "TEXT", nullable: false),
                    Amount = table.Column<decimal>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bids", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Bids_Houses_HouseId",
                        column: x => x.HouseId,
                        principalTable: "Houses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Houses",
                columns: new[] { "Id", "Address", "Country", "Description", "Photo", "Price" },
                values: new object[,]
                {
                    { 1, "123 Main St", "USA", "Beautiful house in the city", "https://media.gettyimages.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=gi&k=20&c=ANSbtbaJgd_AQYLH0f7gp2eLgzXdal6UZrw3Lxqgeok=", 300000m },
                    { 2, "456 Elm St", "USA", "Spacious house with a garden", "https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w=", 400000m },
                    { 3, "789 Oak St", "USA", "Modern house with a pool", "https://media.gettyimages.com/id/1221023970/photo/small-red-brick-house-with-green-grass.jpg?s=612x612&w=0&k=20&c=pzU3H6V3-_LkKRbUNpexw45-WMfXdVTW5tCI2WE_R-8=", 500000m },
                    { 4, "789 Oak St", "USA", "Modern house with a garden", "https://media.gettyimages.com/id/1335269094/photo/modern-forest-house.jpg?s=612x612&w=0&k=20&c=4bAN2bVxMkV_vGs6BvegOFv7MmyTWvNDa2xBDQmrnWY=", 500000m },
                    { 5, "789 Oak St", "USA", "Modern house with a gym", "https://media.gettyimages.com/id/994966932/photo/tiny-house.jpg?s=612x612&w=0&k=20&c=f5xNEbBePU4TzV3GXaF4dm3fKN0yhoOtlh0W6e43W3Q=", 500000m }
                });

            migrationBuilder.InsertData(
                table: "Bids",
                columns: new[] { "Id", "Amount", "Bidder", "CreatedAt", "HouseId" },
                values: new object[,]
                {
                    { 1, 310000m, "John Doe", new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 },
                    { 2, 410000m, "Jane Smith", new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), 2 },
                    { 3, 510000m, "Alice Johnson", new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), 3 },
                    { 4, 620000m, "Alice Prety", new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), 4 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bids_HouseId",
                table: "Bids",
                column: "HouseId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bids");

            migrationBuilder.DropTable(
                name: "Houses");
        }
    }
}
