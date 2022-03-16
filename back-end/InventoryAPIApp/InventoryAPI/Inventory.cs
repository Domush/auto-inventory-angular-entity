using System.ComponentModel.DataAnnotations;

namespace InventoryAPI
{
    public class Inventory
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;

        [StringLength(200)]
        public string Comments { get; set; } = string.Empty;

        public DateTime Added { get; set; } = DateTime.Now;
        public DateTime Updated { get; set; } = DateTime.Now;
        public int CarModelId { get; set; }
    }
}
