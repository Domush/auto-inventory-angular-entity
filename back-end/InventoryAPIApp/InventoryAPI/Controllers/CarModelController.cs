#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InventoryAPI;
using InventoryAPI.Data;

namespace InventoryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarModelController : ControllerBase
    {
        private readonly DataContext _context;

        public CarModelController(DataContext context)
        {
            _context = context;
        }

        // GET: api/CarModel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarModel>>> GetCarModel()
        {
            return await _context.CarModels.ToListAsync();
        }

        // GET: api/CarModel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarModel>> GetInventoryType(int id)
        {
            var InventoryType = await _context.CarModels.FindAsync(id);

            if (InventoryType == null)
            {
                return NotFound();
            }

            return InventoryType;
        }

        // PUT: api/CarModel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventoryType(int id, CarModel InventoryType)
        {
            if (id != InventoryType.Id)
            {
                return BadRequest();
            }

            _context.Entry(InventoryType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventoryTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CarModel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CarModel>> PostInventoryType(CarModel InventoryType)
        {
            _context.CarModels.Add(InventoryType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInventoryType", new { id = InventoryType.Id }, InventoryType);
        }

        // DELETE: api/CarModel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventoryType(int id)
        {
            var InventoryType = await _context.CarModels.FindAsync(id);
            if (InventoryType == null)
            {
                return NotFound();
            }

            _context.CarModels.Remove(InventoryType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InventoryTypeExists(int id)
        {
            return _context.CarModels.Any(e => e.Id == id);
        }
    }
}
