

using Microsoft.EntityFrameworkCore;

namespace InventoryAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Inventory> Inventories { get; set; }

        public DbSet<CarModel> CarModels { get; set; }  

        public DbSet<Status> Statuses { get; set; }

    }
}
