using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Inventory
    {
        public ICollection<Item> PlayerInventory { get; set; } = new List<Item>();
    }
}