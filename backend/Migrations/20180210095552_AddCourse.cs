using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace visualstudiocodecoursesauthors.Migrations.AuthorDb
{
    public partial class AddCourse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Course",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    author_id = table.Column<int>(nullable: false),
                    category = table.Column<string>(maxLength: 100, nullable: false),
                    created = table.Column<DateTime>(nullable: false, defaultValueSql:"datetime('now','localtime')"),
                    length = table.Column<string>(maxLength: 100, nullable: false),
                    title = table.Column<string>(maxLength: 100, nullable: false),
                    watchHref = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.id);
                    table.ForeignKey(
                        name: "FK_Course_Author_author_id",
                        column: x => x.author_id,
                        principalTable: "Author",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Course_author_id",
                table: "Course",
                column: "author_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Course");
        }
    }
}
