using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using visual_studio_code_courses_authors.Models;
using visual_studio_code_courses_authors.Models.Course;

namespace visual_studio_code_courses_authors.Data
{
    public class CourseDbContext : DbContext
    {
        public CourseDbContext(DbContextOptions<CourseDbContext> options)
            : base(options)
        {
        }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Course> Courses { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Author>().ToTable("Author");
            builder.Entity<Course>().ToTable("Course");
            base.OnModelCreating(builder);
        }
    }
}
