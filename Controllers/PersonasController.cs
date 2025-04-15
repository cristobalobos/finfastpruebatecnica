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

        [HttpGet("[action]")]
        public IActionResult GetPersonas()
        {
            var allPersonas = _service.GetAllPersonas();
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
    }
}