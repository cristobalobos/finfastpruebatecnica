using System;
using System.Collections.Generic;
using System.Linq;

namespace Personas.Data
{
    public class PersonaService : IPersonaService
    {

        public List<Persona> GetAllPersonas() => PersonaMock.Personas.ToList();
        public void AddPersona(Persona persona)
        {
            persona.Id = Guid.NewGuid(); // Asegura que el ID sea único
            PersonaMock.Personas.Add(persona); // Agrega al mock en memoria
        }
        public void DeletePersona(Guid id)
        {
            throw new NotImplementedException();
        }



        public Persona GetPersonaById(Guid id)
        {
            throw new NotImplementedException();
        }

        public void UpdatePersona(Guid id, Persona persona)
        {
            throw new NotImplementedException();
        }
    }
}