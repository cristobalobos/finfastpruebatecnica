using System.Collections.Generic;
using System;
using System.Linq;


namespace Personas.Data.Services.Ubicacion
{
    public class UbicacionService : IUbicacionService
    {
        private readonly PersonasDbContext _context;

        public UbicacionService(PersonasDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Region> GetAllRegiones()
        {
            Console.WriteLine("📡 Fetching all regiones from the database...");

            var regiones = _context.Region.ToList();

            Console.WriteLine($"✅ {regiones.Count} regiones loaded from the database");

            return regiones;
        }
        public IEnumerable<Ciudad> GetCiudadesByRegion(short regionCodigo)
        {
            return _context.Ciudad.Where(c => c.RegionCodigo == regionCodigo).ToList();
        }

        public IEnumerable<Comuna> GetComunasByCiudad(short ciudadCodigo)
        {
            return _context.Comuna.Where(c => c.CiudadCodigo == ciudadCodigo).ToList();
        }
    }
}