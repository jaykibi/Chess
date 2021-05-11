using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chess.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public int player1 { get; set; }
        public int? player2 { get; set; }

        public int? winner { get; set; }
        public int? loser { get; set; }

    }
}
