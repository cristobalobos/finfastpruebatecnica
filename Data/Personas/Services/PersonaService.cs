using System;
using System.Collections.Generic;
using System.Linq;

namespace Personas.Data
{
    public class PersonaService : IPersonaService
    {
        public void AddPersona(Persona persona)
        {
            throw new NotImplementedException();
        }

        public void DeletePersona(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Persona> GetAllPersonas() => PersonaMock.Personas.ToList();

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