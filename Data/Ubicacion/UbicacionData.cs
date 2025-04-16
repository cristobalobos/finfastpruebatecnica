using System;
using System.Collections.Generic;

namespace Personas.Data
{
    public class Region
    {
        public short Codigo { get; set; }
        public string Nombre { get; set; }
        public string NombreOficial { get; set; }
        public int CodigoLibroClaseElectronico { get; set; }  // corregido

        public ICollection<Ciudad> Ciudades { get; set; }
        public ICollection<Comuna> Comunas { get; set; }
    }

    public class Ciudad
    {
        public short Codigo { get; set; }          // corregido: era int
        public short RegionCodigo { get; set; }    // corregido: era int
        public string Nombre { get; set; }

        public Region Region { get; set; }
        public ICollection<Comuna> Comunas { get; set; }
    }

    public class Comuna
    {
        public short Codigo { get; set; }           // corregido: era int
        public short RegionCodigo { get; set; }     // corregido: era int
        public short CiudadCodigo { get; set; }     // corregido: era int
        public string Nombre { get; set; }
        public int CodigoPostal { get; set; }       // corregido: era string
        public int CodigoLibroClaseElectronico { get; set; } // corregido: era string

        public Region Region { get; set; }
        public Ciudad Ciudad { get; set; }
    }
}
