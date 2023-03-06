﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using buki_api.db;

#nullable disable

namespace buki_api.Migrations
{
    [DbContext(typeof(MyDbContext))]
    partial class MyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("buki_api.entities.AdEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AuthorId")
                        .HasColumnType("int");

                    b.Property<int>("Subject")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.ToTable("Ads");
                });

            modelBuilder.Entity("buki_api.entities.ReviewEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("RevieweeId")
                        .HasColumnType("int");

                    b.Property<int>("ReviewerId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int?>("UserEntityId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RevieweeId")
                        .IsUnique();

                    b.HasIndex("ReviewerId")
                        .IsUnique();

                    b.HasIndex("UserEntityId");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("buki_api.entities.RevieweeEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("RevieweeEntity");
                });

            modelBuilder.Entity("buki_api.entities.ReviewerEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("ReviewerEntity");
                });

            modelBuilder.Entity("buki_api.entities.UserEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Number")
                        .HasColumnType("longtext");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("buki_api.entities.AdEntity", b =>
                {
                    b.HasOne("buki_api.entities.UserEntity", "Author")
                        .WithMany("Ads")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");
                });

            modelBuilder.Entity("buki_api.entities.ReviewEntity", b =>
                {
                    b.HasOne("buki_api.entities.RevieweeEntity", "Reviewee")
                        .WithOne("Review")
                        .HasForeignKey("buki_api.entities.ReviewEntity", "RevieweeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("buki_api.entities.ReviewerEntity", "Reviewer")
                        .WithOne("Review")
                        .HasForeignKey("buki_api.entities.ReviewEntity", "ReviewerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("buki_api.entities.UserEntity", null)
                        .WithMany("Reviews")
                        .HasForeignKey("UserEntityId");

                    b.Navigation("Reviewee");

                    b.Navigation("Reviewer");
                });

            modelBuilder.Entity("buki_api.entities.RevieweeEntity", b =>
                {
                    b.Navigation("Review")
                        .IsRequired();
                });

            modelBuilder.Entity("buki_api.entities.ReviewerEntity", b =>
                {
                    b.Navigation("Review")
                        .IsRequired();
                });

            modelBuilder.Entity("buki_api.entities.UserEntity", b =>
                {
                    b.Navigation("Ads");

                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
