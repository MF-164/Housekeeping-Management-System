﻿// <auto-generated />
using System;
using DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DAL.Migrations
{
    [DbContext(typeof(CleaningLadiesService))]
    partial class CleaningLadiesServiceModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.17")
                .HasAnnotation("Proxies:ChangeTracking", false)
                .HasAnnotation("Proxies:CheckEquality", false)
                .HasAnnotation("Proxies:LazyLoading", true)
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DAL.CleaningLady", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("HourlyPrice")
                        .HasColumnType("float");

                    b.Property<string>("HouseNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OriginCountry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Status")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("CleaningLadies");
                });

            modelBuilder.Entity("DAL.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HouseNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("DAL.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CleaningLadyId")
                        .HasColumnType("int");

                    b.Property<int>("ClientId")
                        .HasColumnType("int");

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Rating")
                        .HasColumnType("int");

                    b.Property<DateTime?>("SendTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CleaningLadyId");

                    b.HasIndex("ClientId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("DAL.Day", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CleaningLadyId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Date")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CleaningLadyId");

                    b.ToTable("Days");
                });

            modelBuilder.Entity("DAL.Hours", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("DayId")
                        .HasColumnType("int");

                    b.Property<int>("From")
                        .HasColumnType("int");

                    b.Property<int>("To")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("DayId");

                    b.ToTable("Hours");
                });

            modelBuilder.Entity("DAL.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CleaningLadyId")
                        .HasColumnType("int");

                    b.Property<int?>("ClientId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DateOrder")
                        .HasColumnType("datetime2");

                    b.Property<int?>("From")
                        .HasColumnType("int");

                    b.Property<double?>("Payment")
                        .HasColumnType("float");

                    b.Property<int?>("To")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CleaningLadyId");

                    b.HasIndex("ClientId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("DAL.Comment", b =>
                {
                    b.HasOne("DAL.CleaningLady", "CleaningLady")
                        .WithMany("Comments")
                        .HasForeignKey("CleaningLadyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Client", "Client")
                        .WithMany("Comments")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CleaningLady");

                    b.Navigation("Client");
                });

            modelBuilder.Entity("DAL.Day", b =>
                {
                    b.HasOne("DAL.CleaningLady", "CleaningLady")
                        .WithMany("Days")
                        .HasForeignKey("CleaningLadyId");

                    b.Navigation("CleaningLady");
                });

            modelBuilder.Entity("DAL.Hours", b =>
                {
                    b.HasOne("DAL.Day", "Day")
                        .WithMany("FreeHours")
                        .HasForeignKey("DayId");

                    b.Navigation("Day");
                });

            modelBuilder.Entity("DAL.Order", b =>
                {
                    b.HasOne("DAL.CleaningLady", "CleaningLady")
                        .WithMany("Orders")
                        .HasForeignKey("CleaningLadyId");

                    b.HasOne("DAL.Client", "Client")
                        .WithMany("orders")
                        .HasForeignKey("ClientId");

                    b.Navigation("CleaningLady");

                    b.Navigation("Client");
                });

            modelBuilder.Entity("DAL.CleaningLady", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Days");

                    b.Navigation("Orders");
                });

            modelBuilder.Entity("DAL.Client", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("orders");
                });

            modelBuilder.Entity("DAL.Day", b =>
                {
                    b.Navigation("FreeHours");
                });
#pragma warning restore 612, 618
        }
    }
}
