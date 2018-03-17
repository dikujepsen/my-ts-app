using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace visualstudiocodecoursesauthors.Migrations
{
    public partial class AddAuthor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Author",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    created = table.Column<DateTime>(nullable: false, defaultValueSql:"datetime('now','localtime')"),
                    firstName = table.Column<string>(maxLength: 100, nullable: false),
                    lastName = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Author", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Author");
        }
    }
}
