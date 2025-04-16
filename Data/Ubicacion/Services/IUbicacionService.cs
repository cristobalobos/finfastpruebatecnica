using System.Collections.Generic;

namespace Personas.Data.Services.Ubicacion
{
    public interface IUbicacionService
    {
        IEnumerable<Region> GetAllRegiones();
        IEnumerable<Ciudad> GetCiudadesByRegion(short regionCodigo);
        IEnumerable<Comuna> GetComunasByCiudad(short ciudadCodigo);
    }
}