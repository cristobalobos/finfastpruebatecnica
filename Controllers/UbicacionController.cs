using Microsoft.AspNetCore.Mvc;
using Personas.Data;
using System.Collections.Generic;
using System.Linq;

namespace Personas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UbicacionController : ControllerBase
    {
        private readonly PersonasDbContext _context;

        public UbicacionController(PersonasDbContext context)
        {
            _context = context;
        }

        // ✅ /api/Ubicacion/GetAllRegiones
        [HttpGet("GetAllRegiones")]
        public ActionResult<IEnumerable<Region>> GetAllRegiones()
        {
            var regiones = _context.Region.ToList();
            return Ok(regiones);
        }

        // ✅ /api/Ubicacion/GetCiudadesByRegion/{regionCodigo}
        [HttpGet("GetCiudadesByRegion/{regionCodigo}")]
        public ActionResult<IEnumerable<Ciudad>> GetCiudadesByRegion(short regionCodigo)
        {
            var ciudades = _context.Ciudad
                                   .Where(c => c.RegionCodigo == regionCodigo)
                                   .ToList();
            return Ok(ciudades);
        }

        // ✅ /api/Ubicacion/GetComunasByCiudad/{ciudadCodigo}
        [HttpGet("GetComunasByCiudad/{ciudadCodigo}")]
        public ActionResult<IEnumerable<Comuna>> GetComunasByCiudad(short ciudadCodigo)
        {
            var comunas = _context.Comuna
                                  .Where(c => c.CiudadCodigo == ciudadCodigo)
                                  .ToList();
            return Ok(comunas);
        }
    }
}
