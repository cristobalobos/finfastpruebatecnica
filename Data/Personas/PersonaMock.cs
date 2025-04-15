using System;
using System.Collections.Generic;

namespace Personas.Data
{
    public static class PersonaMock
    {
        public static List<Persona> Personas => allPersonas;

        static List<Persona> allPersonas = new List<Persona>()
        {
            new Persona()
            {
                Id = new Guid("00000000-0000-0000-0000-000000000001"),
                RunCuerpo = 11111111,
                RunDigito = '1',
                Nombres = "Ada",
                ApellidoPaterno = "Lovelace",
                ApellidoMaterno = "",
                Email = "ada@correo.cl",
                SexoCodigo = 2,
                FechaNacimiento = new DateTime(1815, 12, 10),
                RegionCodigo = 1,
                CiudadCodigo = 1,
                ComunaCodigo = 1,
                Direccion = "Calle Imaginaria 123",
                Telefono = 987654321,
                Observaciones = "Primera programadora"
            },
            new Persona()
            {
                Id = new Guid("00000000-0000-0000-0000-000000000002"),
                RunCuerpo = 22222222,
                RunDigito = '2',
                Nombres = "Grace",
                ApellidoPaterno = "Hopper",
                ApellidoMaterno = "",
                Email = "grace@correo.cl",
                SexoCodigo = 2,
                FechaNacimiento = new DateTime(1906, 12, 9),
                RegionCodigo = 1,
                CiudadCodigo = 1,
                ComunaCodigo = 2,
                Direccion = "Avenida Main 456",
                Telefono = 912345678,
                Observaciones = "Pionera en computación"
            },
            new Persona()
            {
                Id = new Guid("00000000-0000-0000-0000-000000000003"),
                RunCuerpo = 33333333,
                RunDigito = '3',
                Nombres = "Margaret",
                ApellidoPaterno = "Hamilton",
                ApellidoMaterno = "",
                Email = "margaret@correo.cl",
                SexoCodigo = 2,
                FechaNacimiento = new DateTime(1936, 8, 17),
                RegionCodigo = 1,
                CiudadCodigo = 1,
                ComunaCodigo = 3,
                Direccion = "Street 789",
                Telefono = 976543210,
                Observaciones = "Software lunar"
            },
            new Persona()
            {
                Id = new Guid("00000000-0000-0000-0000-000000000004"),
                RunCuerpo = 44444444,
                RunDigito = '4',
                Nombres = "Joan",
                ApellidoPaterno = "Clarke",
                ApellidoMaterno = "",
                Email = "joan@correo.cl",
                SexoCodigo = 2,
                FechaNacimiento = new DateTime(1917, 6, 24),
                RegionCodigo = 1,
                CiudadCodigo = 1,
                ComunaCodigo = 4,
                Direccion = "Diagonal Norte 654",
                Telefono = 998877665,
                Observaciones = "Criptógrafa británica"
            }
        };
    }
}
