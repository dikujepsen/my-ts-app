



using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace visual_studio_code_courses_authors.Models.Course
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class Author
    {
        public int id { get; set; }

        [Required, MaxLength(100)]
        public string firstName { get; set; }

        [Required, MaxLength(100)]
        public string lastName { get; set; }

        [Required, DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime created { get; set; }
    }
}


