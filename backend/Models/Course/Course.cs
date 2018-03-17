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
    public class Course
    {
        public int id { get; set; }

        [Required, MaxLength(100)]
        public string title { get; set; }

        [Required, MaxLength(100)]
        public string watchHref { get; set; }

        [Required, MaxLength(100)]
        public string length { get; set; }

        [Required, MaxLength(100)]
        public string category { get; set; }

        [Required, DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime created { get; set; }

        [ForeignKey("author")]
        public int author_id {get; set;}
        public Author author {get;set;}
    }
}


