using System;
using System.Collections.Generic;

namespace Finfast.Data
{
    public interface IFinfastService
    {
        List<Persona> GetAllPersonas();
        Persona GetPersonaById(Guid id);
        void AddPersona(Persona persona);
        void UpdatePersona(Guid id, Persona persona);
        void DeletePersona(Guid id);
    }
}