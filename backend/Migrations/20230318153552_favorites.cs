using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace buki_api.Migrations
{
    /// <inheritdoc />
    public partial class favorites : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Users_UserEntityId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserEntityId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserEntityId",
                table: "Users");

            migrationBuilder.CreateTable(
                name: "UserFavorites",
                columns: table => new
                {
                    FavoritesId = table.Column<int>(type: "int", nullable: false),
                    LikedById = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFavorites", x => new { x.FavoritesId, x.LikedById });
                    table.ForeignKey(
                        name: "FK_UserFavorites_Ads_FavoritesId",
                        column: x => x.FavoritesId,
                        principalTable: "Ads",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserFavorites_Users_LikedById",
                        column: x => x.LikedById,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_UserFavorites_LikedById",
                table: "UserFavorites",
                column: "LikedById");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserFavorites");

            migrationBuilder.AddColumn<int>(
                name: "UserEntityId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserEntityId",
                table: "Users",
                column: "UserEntityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Users_UserEntityId",
                table: "Users",
                column: "UserEntityId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
