using Microsoft.EntityFrameworkCore;

public class SchoolContext : DbContext
{
    public SchoolContext(DbContextOptions<SchoolContext> options) : base(options)
    {
    }
    public DbSet<Student> Students { get; set; }

     protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Student>().ToTable("Student");
            base.OnModelCreating(builder);
        }


}