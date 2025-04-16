using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Personas.Data
{
    public class Persona
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "El campo R.U.N. es obligatorio")]
        public int RunCuerpo { get; set; }

        [Required(ErrorMessage = "El dígito verificador es obligatorio")]
        public char RunDigito { get; set; }

        // [Required(ErrorMessage = "El nombre es obligatorio")]
        public string Nombres { get; set; }

        [Required(ErrorMessage = "El apellido paterno es obligatorio")]
        public string ApellidoPaterno { get; set; }

        public string ApellidoMaterno { get; set; }

        // [Required(ErrorMessage = "El email es obligatorio")]
        // [EmailAddress(ErrorMessage = "El formato del email no es válido")]
        public string Email { get; set; }

        // [Required(ErrorMessage = "El sexo es obligatorio")]
        public short? SexoCodigo { get; set; }

        // [Required(ErrorMessage = "La fecha de nacimiento es obligatoria")]
        // [DataType(DataType.Date)]
        public DateTime? FechaNacimiento { get; set; }

        // [Required(ErrorMessage = "La región es obligatoria")]
        public short? RegionCodigo { get; set; }

        // [Required(ErrorMessage = "La ciudad es obligatoria")]
        public short? CiudadCodigo { get; set; }

        // [Required(ErrorMessage = "La comuna es obligatoria")]
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
}
