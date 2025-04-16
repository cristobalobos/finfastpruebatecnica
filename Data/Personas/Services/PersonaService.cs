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
            return PersonaMock.Personas.FirstOrDefault(p => p.Id == id);

        }

        public void UpdatePersona(Guid id, Persona updatedPersona)
        {
            var existingPersona = PersonaMock.Personas.FirstOrDefault(p => p.Id == id);

            if (existingPersona == null)
                return; // O puedes lanzar una excepción si prefieres validar más estrictamente

            // Actualizamos cada campo manualmente
            existingPersona.RunCuerpo = updatedPersona.RunCuerpo;
            existingPersona.RunDigito = updatedPersona.RunDigito;
            existingPersona.Nombres = updatedPersona.Nombres;
            existingPersona.ApellidoPaterno = updatedPersona.ApellidoPaterno;
            existingPersona.ApellidoMaterno = updatedPersona.ApellidoMaterno;
            existingPersona.Email = updatedPersona.Email;
            existingPersona.SexoCodigo = updatedPersona.SexoCodigo;
            existingPersona.FechaNacimiento = updatedPersona.FechaNacimiento;
            existingPersona.RegionCodigo = updatedPersona.RegionCodigo;
            existingPersona.CiudadCodigo = updatedPersona.CiudadCodigo;
            existingPersona.ComunaCodigo = updatedPersona.ComunaCodigo;
            existingPersona.Direccion = updatedPersona.Direccion;
            existingPersona.Telefono = updatedPersona.Telefono;
            existingPersona.Observaciones = updatedPersona.Observaciones;
        }
    }
}