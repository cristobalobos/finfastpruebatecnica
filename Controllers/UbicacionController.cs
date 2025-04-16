using Microsoft.AspNetCore.Mvc;
using Personas.Data;
using System;
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
            Console.WriteLine("📍 GET /api/Ubicacion/GetAllRegiones - Request received");

            var regiones = _context.Region.ToList();

            if (regiones == null || !regiones.Any())
            {
                Console.WriteLine("⚠️ No regions found");
                return NotFound("No se encontraron regiones.");
            }

            Console.WriteLine($"✅ {regiones.Count} regiones found");
            return Ok(regiones);
        }

        // ✅ /api/Ubicacion/GetCiudadesByRegion/{regionCodigo}
        [HttpGet("GetCiudadesByRegion/{regionCodigo}")]
        public ActionResult<IEnumerable<Ciudad>> GetCiudadesByRegion(short regionCodigo)
        {
            Console.WriteLine($"📍 GET /api/Ubicacion/GetCiudadesByRegion/{regionCodigo} - Request received");

            var ciudades = _context.Ciudad
                                   .Where(c => c.RegionCodigo == regionCodigo)
                                   .ToList();

            if (ciudades == null || !ciudades.Any())
            {
                Console.WriteLine($"⚠️ No cities found for region {regionCodigo}");
                return NotFound($"No se encontraron ciudades para la región {regionCodigo}.");
            }

            Console.WriteLine($"✅ {ciudades.Count} ciudades found for region {regionCodigo}");
            return Ok(ciudades);
        }

        // ✅ /api/Ubicacion/GetComunasByRegionAndCiudad/{regionCodigo}/{ciudadCodigo}
        [HttpGet("GetComunasByRegionAndCiudad/{regionCodigo}/{ciudadCodigo}")]
        public ActionResult<IEnumerable<Comuna>> GetComunasByRegionAndCiudad(short regionCodigo, short ciudadCodigo)
        {
            Console.WriteLine($"📍 GET /api/Ubicacion/GetComunasByRegionAndCiudad/{regionCodigo}/{ciudadCodigo} - Request received");

            var comunas = _context.Comuna
                                  .Where(c => c.RegionCodigo == regionCodigo && c.CiudadCodigo == ciudadCodigo)
                                  .ToList();

            if (comunas == null || !comunas.Any())
            {
                Console.WriteLine($"⚠️ No comunas found for region {regionCodigo} and ciudad {ciudadCodigo}");
                return NotFound($"No se encontraron comunas para la región {regionCodigo} y ciudad {ciudadCodigo}.");
            }

            Console.WriteLine($"✅ {comunas.Count} comunas found for region {regionCodigo} and ciudad {ciudadCodigo}");
            return Ok(comunas);
        }

    }
}