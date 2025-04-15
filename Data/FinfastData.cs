using System;
using System.Collections.Generic;

namespace Finfast.Data
{
    public class Persona
    {
        public Guid Id { get; set; }
        public int RunCuerpo { get; set; }
        public char RunDigito { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Email { get; set; }
        public short SexoCodigo { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public short? RegionCodigo { get; set; }
        public short? CiudadCodigo { get; set; }
        public short? ComunaCodigo { get; set; }
        public string Direccion { get; set; }
        public int? Telefono { get; set; }
        public string Observaciones { get; set; }

        public Sexo Sexo { get; set; }
        public Region Region { get; set; }
        public Ciudad Ciudad { get; set; }

    }

    public class Sexo
    {
        public short Codigo { get; set; }
        public string Nombre { get; set; }
        public string Letra { get; set; }

        public ICollection<Persona> Personas { get; set; }
    }

    public class Region
    {
        public short Codigo { get; set; }
        public string Nombre { get; set; }
        public string NombreOficial { get; set; }
        public string CodigoLibroClaseElectronico { get; set; }

        public ICollection<Ciudad> Ciudades { get; set; }
        public ICollection<Comuna> Comunas { get; set; }
    }

    public class Ciudad
    {
        public short Codigo { get; set; }
        public short RegionCodigo { get; set; }
        public string Nombre { get; set; }

        public Region Region { get; set; }
        public ICollection<Comuna> Comunas { get; set; }
    }

    public class Comuna
    {
        public short Codigo { get; set; }
        public short RegionCodigo { get; set; }
        public short CiudadCodigo { get; set; }
        public string Nombre { get; set; }
        public string CodigoPostal { get; set; }
        public string CodigoLibroClaseElectronico { get; set; }

        public Region Region { get; set; }
        public Ciudad Ciudad { get; set; }
    }
}