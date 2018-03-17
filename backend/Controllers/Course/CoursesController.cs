using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using visual_studio_code_courses_authors.Data;
using visual_studio_code_courses_authors.Models.Course;
using CourseModel = visual_studio_code_courses_authors.Models.Course;

namespace visual_studio_code_courses_authors.Controllers.Course
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        private readonly CourseDbContext _context;

        public CoursesController(CourseDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new {results = _context.Courses.ToList()});
        }


        [HttpPost]
        public IActionResult Post([FromBody] CourseModel.Course item)
        {
            _context.Courses.Add(item); 

            _context.SaveChanges();
            return Ok(item);
        }
        

    }
}