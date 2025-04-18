using Microsoft.AspNetCore.Mvc;
using Personas.Data;
using System;

namespace Personas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonasController : ControllerBase
    {
        private readonly IPersonaService _service;

        public PersonasController(IPersonaService service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public IActionResult GetPersonas()
        {
            Console.WriteLine("📥 GET /api/Personas/GetAll - Request received");

            var allPersonas = _service.GetAllPersonas();

            Console.WriteLine($"✅ Retrieved {allPersonas.Count} personas from the service");
            return Ok(allPersonas);
        }

        [HttpPost("AddPersona")]
        public IActionResult AddPersona([FromBody] Persona persona)
        {
            if (persona == null)
            {
                return BadRequest("The person cannot be null.");
            }

            _service.AddPersona(persona);
            return Ok("The person was added successfully.");
        }

        [HttpPut("UpdatePersona/{id}")]
        public IActionResult UpdatePersona(Guid id, [FromBody] Persona persona)
        {
            Console.WriteLine($"📝 Update request received for ID: {id}");

            if (persona == null || id == Guid.Empty)
            {
                Console.WriteLine("❌ Invalid request: persona is null or ID is empty");
                return BadRequest("Invalid persona or ID.");
            }

            var existing = _service.GetPersonaById(id);
            if (existing == null)
            {
                Console.WriteLine($"⚠️ Persona with ID {id} not found");
                return NotFound("Persona not found.");
            }

            _service.UpdatePersona(id, persona);
            Console.WriteLine($"✅ Persona with ID {id} updated successfully");

            return Ok("Persona updated successfully.");
        }

        [HttpDelete("DeletePersona/{id}")]
        public IActionResult DeletePersona(Guid id)
        {
            Console.WriteLine($"🗑️ Delete request received for ID: {id}");

            var existing = _service.GetPersonaById(id);
            if (existing == null)
            {
                Console.WriteLine($"⚠️ Persona with ID {id} not found");
                return NotFound("Persona not found.");
            }

            _service.DeletePersona(id);
            Console.WriteLine($"✅ Persona with ID {id} deleted successfully");

            return Ok("Persona deleted successfully.");
        }

        [HttpGet("GetPersonaById/{id}")]
        public IActionResult GetPersonaById(Guid id)
        {
            Console.WriteLine($"🔍 Fetching persona with ID: {id}");

            var persona = _service.GetPersonaById(id);

            if (persona == null)
            {
                Console.WriteLine("⚠️ Persona not found");
                return NotFound("Persona not found.");
            }

            return Ok(persona);
        }

    }
}