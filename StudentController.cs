using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Student.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        studentDBcontext sc;
        public StudentController(studentDBcontext sc)
        {
            this.sc = sc;
        }

        [HttpPost]
        public IActionResult one([FromBody]student s1)
        {
            sc.Students.Add(s1);
            sc.SaveChanges();
            return Ok();
        }


        [HttpGet]
        public List<student> two()
            {
            return sc.Students.ToList();
        }


        [HttpGet ("{id:int}")]
        public student three(int id)
        {
            student s = sc.Students.Find(id);
            return s;
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteStudent(int id)
        {
            var s = sc.Students.Find(id);
            if (s == null)
            {
                return NotFound("Record not found");
            }

            sc.Students.Remove(s);
            sc.SaveChanges();
            return Ok("Record Deleted");
        }



        [HttpPut("{id:int}")]
        public string five(int id, student st)
        {
            student s = sc.Students.Find(id);

            

            s.FullName = st.FullName;
            s.Email = st.Email;
            s.Mobile = st.Mobile;
            s.City = st.City;
            sc.Update(s);
            sc.SaveChanges();

            return "Record Updated Successfully";
        }


    }

}
