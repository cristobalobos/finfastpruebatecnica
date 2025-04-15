using System;
using System.Collections.Generic;

namespace Personas.Data
{
    public interface IPersonaService
    {
        List<Persona> GetAllPersonas();
        Persona GetPersonaById(Guid id);
        void AddPersona(Persona persona);
        void UpdatePersona(Guid id, Persona persona);
        void DeletePersona(Guid id);
    }
}