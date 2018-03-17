using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace visual_studio_code_courses_authors.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
