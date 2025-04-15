using Microsoft.AspNetCore.Mvc;
using Finfast.Data;
using System;

namespace Finfast.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonasController : ControllerBase
    {
        private readonly IFinfastService _service;

        public PersonasController(IFinfastService service)
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