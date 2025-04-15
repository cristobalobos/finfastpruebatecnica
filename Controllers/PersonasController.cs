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

        // Más acciones vendrán aquí: GetById, Add, Update, Delete
    }
}