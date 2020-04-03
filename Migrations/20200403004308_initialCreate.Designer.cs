﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ecommerce.Data;

namespace ecommerce.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200403004308_initialCreate")]
    partial class initialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3");

            modelBuilder.Entity("ecommerce.Model.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Address2")
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Fullname")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("LastLogin")
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHashed")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("State")
                        .HasColumnType("TEXT");

                    b.Property<int>("Zip4")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Zip5")
                        .HasColumnType("INTEGER");

                    b.HasKey("CustomerId");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("ecommerce.Model.CustomerShippingAddresses", b =>
                {
                    b.Property<int>("ShippingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Address2")
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .HasColumnType("TEXT");

                    b.Property<int>("CustomerId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("State")
                        .HasColumnType("TEXT");

                    b.Property<string>("Zip4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Zip5")
                        .HasColumnType("TEXT");

                    b.HasKey("ShippingId");

                    b.HasIndex("CustomerId");

                    b.ToTable("CustomerShippingAddresses");
                });

            modelBuilder.Entity("ecommerce.Model.OrderDetails", b =>
                {
                    b.Property<int>("DetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("DetailOrderId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("DetailProductId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("DetailProductName")
                        .HasColumnType("TEXT");

                    b.Property<string>("DetailProductPrice")
                        .HasColumnType("TEXT");

                    b.Property<int>("DetailProductQuantity")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("OrdersOrderId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ProductId")
                        .HasColumnType("INTEGER");

                    b.HasKey("DetailId");

                    b.HasIndex("OrdersOrderId");

                    b.ToTable("OrderDetails");
                });

            modelBuilder.Entity("ecommerce.Model.Orders", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CustomerId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("OrderName")
                        .HasColumnType("TEXT");

                    b.Property<string>("OrderShipAddress1")
                        .HasColumnType("TEXT");

                    b.Property<string>("OrderShipAddress2")
                        .HasColumnType("TEXT");

                    b.Property<string>("OrderShipCity")
                        .HasColumnType("TEXT");

                    b.Property<string>("OrderShipState")
                        .HasColumnType("TEXT");

                    b.Property<int>("OrderShipZip4")
                        .HasColumnType("INTEGER");

                    b.Property<int>("OrderShipZip5")
                        .HasColumnType("INTEGER");

                    b.HasKey("OrderId");

                    b.HasIndex("CustomerId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ecommerce.Model.Products", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("OrderDetailsDetailId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ProductImageUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProductInformation")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProductName")
                        .HasColumnType("TEXT");

                    b.Property<double>("ProductPrice")
                        .HasColumnType("REAL");

                    b.HasKey("ProductId");

                    b.HasIndex("OrderDetailsDetailId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("ecommerce.Model.CustomerShippingAddresses", b =>
                {
                    b.HasOne("ecommerce.Model.Customer", "Customer")
                        .WithMany("CustomerShippingAddresses")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ecommerce.Model.OrderDetails", b =>
                {
                    b.HasOne("ecommerce.Model.Orders", null)
                        .WithMany("OrderDetails")
                        .HasForeignKey("OrdersOrderId");
                });

            modelBuilder.Entity("ecommerce.Model.Orders", b =>
                {
                    b.HasOne("ecommerce.Model.Customer", "customer")
                        .WithMany("Orders")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ecommerce.Model.Products", b =>
                {
                    b.HasOne("ecommerce.Model.OrderDetails", null)
                        .WithMany("Products")
                        .HasForeignKey("OrderDetailsDetailId");
                });
#pragma warning restore 612, 618
        }
    }
}
