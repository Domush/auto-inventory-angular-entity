using System.ComponentModel.DataAnnotations;

namespace InventoryAPI
{
    public class CarModel
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string Model { get; set; } = String.Empty;
    }
}
