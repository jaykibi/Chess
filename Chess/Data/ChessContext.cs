using Microsoft.EntityFrameworkCore;
using Chess.Models; 

namespace Chess.Data
{
    public class ChessContext : DbContext
    {
        public ChessContext (DbContextOptions<ChessContext> options)
            : base(options)
        {

        }

        public DbSet<Game> Game { get; set; }
    }
}
