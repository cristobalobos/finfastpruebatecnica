using System;
using System.Collections.Generic;
using System.Linq;

namespace Finfast.Data
{
    public class FinfastService : IFinfastService
    {
        public void AddPersona(Persona persona)
        {
            throw new NotImplementedException();
        }

        public void DeletePersona(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<Persona> GetAllPersonas() => Data.Personas.ToList();

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