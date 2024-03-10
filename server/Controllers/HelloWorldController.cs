using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        [Route("Hello")]
        public ActionResult Hello()
        {
            return Ok("Hello World");
        }
    }
}
