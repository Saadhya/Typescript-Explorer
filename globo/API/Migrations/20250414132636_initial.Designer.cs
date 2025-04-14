﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(HouseDbContext))]
    [Migration("20250414132636_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.4");

            modelBuilder.Entity("BidEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Amount")
                        .HasColumnType("TEXT");

                    b.Property<string>("Bidder")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<int>("HouseId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("HouseId");

                    b.ToTable("Bids");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Amount = 310000m,
                            Bidder = "John Doe",
                            CreatedAt = new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HouseId = 1
                        },
                        new
                        {
                            Id = 2,
                            Amount = 410000m,
                            Bidder = "Jane Smith",
                            CreatedAt = new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HouseId = 2
                        },
                        new
                        {
                            Id = 3,
                            Amount = 510000m,
                            Bidder = "Alice Johnson",
                            CreatedAt = new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HouseId = 3
                        },
                        new
                        {
                            Id = 4,
                            Amount = 620000m,
                            Bidder = "Alice Prety",
                            CreatedAt = new DateTime(2025, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            HouseId = 4
                        });
                });

            modelBuilder.Entity("HouseEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<string>("Country")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Houses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "123 Main St",
                            Country = "USA",
                            Description = "Beautiful house in the city",
                            Photo = "https://media.gettyimages.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=gi&k=20&c=ANSbtbaJgd_AQYLH0f7gp2eLgzXdal6UZrw3Lxqgeok=",
                            Price = 300000m
                        },
                        new
                        {
                            Id = 2,
                            Address = "456 Elm St",
                            Country = "USA",
                            Description = "Spacious house with a garden",
                            Photo = "https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w=",
                            Price = 400000m
                        },
                        new
                        {
                            Id = 3,
                            Address = "789 Oak St",
                            Country = "USA",
                            Description = "Modern house with a pool",
                            Photo = "https://media.gettyimages.com/id/1221023970/photo/small-red-brick-house-with-green-grass.jpg?s=612x612&w=0&k=20&c=pzU3H6V3-_LkKRbUNpexw45-WMfXdVTW5tCI2WE_R-8=",
                            Price = 500000m
                        },
                        new
                        {
                            Id = 4,
                            Address = "789 Oak St",
                            Country = "USA",
                            Description = "Modern house with a garden",
                            Photo = "https://media.gettyimages.com/id/1335269094/photo/modern-forest-house.jpg?s=612x612&w=0&k=20&c=4bAN2bVxMkV_vGs6BvegOFv7MmyTWvNDa2xBDQmrnWY=",
                            Price = 500000m
                        },
                        new
                        {
                            Id = 5,
                            Address = "789 Oak St",
                            Country = "USA",
                            Description = "Modern house with a gym",
                            Photo = "https://media.gettyimages.com/id/994966932/photo/tiny-house.jpg?s=612x612&w=0&k=20&c=f5xNEbBePU4TzV3GXaF4dm3fKN0yhoOtlh0W6e43W3Q=",
                            Price = 500000m
                        });
                });

            modelBuilder.Entity("BidEntity", b =>
                {
                    b.HasOne("HouseEntity", "House")
                        .WithMany()
                        .HasForeignKey("HouseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("House");
                });
#pragma warning restore 612, 618
        }
    }
}
