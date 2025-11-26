using System.ComponentModel.DataAnnotations;

namespace Student
{
    public class student
    {
        [Key]
        public int StudentId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string City { get; set; }
    }
}
