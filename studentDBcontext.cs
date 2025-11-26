using Microsoft.EntityFrameworkCore;

namespace Student
{
    public class studentDBcontext : DbContext
    {


        public studentDBcontext(DbContextOptions<studentDBcontext> options) : base(options)
        {
        }

        public DbSet<student> Students { get; set; }
    }
}

