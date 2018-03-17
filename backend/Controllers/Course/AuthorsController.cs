using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using visual_studio_code_courses_authors.Data;
using visual_studio_code_courses_authors.Models.Course;

namespace visual_studio_code_courses_authors.Controllers.Course
{
    [Route("api/[controller]")]
    public class AuthorsController : Controller
    {
        private readonly CourseDbContext _context;

        public AuthorsController(CourseDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new {results = _context.Authors.ToList()});
        }


        [HttpPost]
        public IActionResult Post([FromBody] Author item)
        {
            _context.Authors.Add(item);
            _context.SaveChanges();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Author item)
        {
            if (item == null || item.id != id)
            {
                return BadRequest();
            }

            var author = _context.Authors.FirstOrDefault(t => t.id == id);
            if (author == null)
            {
                return NotFound();
            }

            author.firstName = item.firstName;
            author.lastName = item.lastName;

            _context.Authors.Update(author);
            _context.SaveChanges();
            return Ok(author);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var author = new Author() {id = id};
            _context.Authors.Attach(author);
            _context.Authors.Remove(author);
            _context.SaveChanges();
            return Ok(true);
        }




    }
}