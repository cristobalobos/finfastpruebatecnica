using System;
using System.Collections.Generic;
using System.Linq;

namespace Personas.Data
{
    public class PersonaService : IPersonaService
    {

        private readonly PersonasDbContext _context;

        public PersonaService(PersonasDbContext context)
        {
            _context = context;
        }

        public List<Persona> GetAllPersonas()
        {
            // ✅ Using Entity Framework (real database)
            return _context.Persona.ToList();

            // 🧪 Using mock data (for testing purposes)
            // return PersonaMock.Personas.ToList();
        }

        public void AddPersona(Persona persona)
        {
            if (persona == null)
            {
                Console.WriteLine("❌ Attempted to add a null persona");
                return;
            }

            persona.Id = Guid.NewGuid();

            // ✅ Using Entity Framework (real database)
            _context.Persona.Add(persona);
            _context.SaveChanges();
            Console.WriteLine($"✅ Persona with ID {persona.Id} added to the database");

            // 🧪 Using mock data (for testing purposes)
            // PersonaMock.Personas.Add(persona);
            // Console.WriteLine($"🧪 Persona with ID {persona.Id} added to mock data");
        }
        public void DeletePersona(Guid id)
        {
            var persona = PersonaMock.Personas.FirstOrDefault(p => p.Id == id);
            if (persona != null)
            {
                PersonaMock.Personas.Remove(persona);
                Console.WriteLine($"🗑 Persona with ID {id} deleted");
            }
            else
            {
                Console.WriteLine($"⚠️ Persona with ID {id} not found for deletion");
            }
        }

        public Persona GetPersonaById(Guid id)
        {
            // ✅ From real database
            return _context.Persona.FirstOrDefault(p => p.Id == id);

            // 🧪 Mock fallback
            // return PersonaMock.Personas.FirstOrDefault(p => p.Id == id);
        }

        public void UpdatePersona(Guid id, Persona persona)
        {
            Console.WriteLine($"📝 Attempting to update persona with ID: {id}");

            var existing = _context.Persona.FirstOrDefault(p => p.Id == id);

            if (existing != null)
            {
                // ✅ Update fields
                existing.RunCuerpo = persona.RunCuerpo;
                existing.RunDigito = persona.RunDigito;
                existing.Nombres = persona.Nombres;
                existing.ApellidoPaterno = persona.ApellidoPaterno;
                existing.ApellidoMaterno = persona.ApellidoMaterno;
                existing.Email = persona.Email;
                existing.SexoCodigo = persona.SexoCodigo;
                existing.FechaNacimiento = persona.FechaNacimiento;
                existing.RegionCodigo = persona.RegionCodigo;
                existing.CiudadCodigo = persona.CiudadCodigo;
                existing.ComunaCodigo = persona.ComunaCodigo;
                existing.Direccion = persona.Direccion;
                existing.Telefono = persona.Telefono;
                existing.Observaciones = persona.Observaciones;

                _context.SaveChanges();
                Console.WriteLine($"✅ Persona with ID {id} updated successfully in the database");
            }
            else
            {
                Console.WriteLine($"⚠️ Persona with ID {id} not found for update");
            }

            // 🧪 Using mock data (for testing purposes)
            // var existing = PersonaMock.Personas.FirstOrDefault(p => p.Id == id);
            // if (existing != null)
            // {
            //     var index = PersonaMock.Personas.IndexOf(existing);
            //     PersonaMock.Personas[index] = persona;
            //     Console.WriteLine($"✅ Persona with ID {id} updated in mock data");
            // }
        }
    }
}