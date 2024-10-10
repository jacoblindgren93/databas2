using foodspot_be.Dto;
using foodspot_be.Model;
using Microsoft.AspNetCore.Mvc;
using ProtaskApi.DataAccess;
using ProTaskApi.Utils;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace foodspot_be.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DbAccess dbAccess;
        private readonly Token token;
        private readonly IConfiguration _config;

        public LoginController(IConfiguration config) 
        { 
            this.dbAccess = new DbAccess(config);
            this.token = new Token(config);
        }

        // GET: api/<LoginController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LoginController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Post([FromBody] LoginDto credentials)
        {
            if(credentials == null)
            {
                return BadRequest("Invalid credentials");
            }
            /*
                string sql = "SELECT name, password FROM BUSINESS WHERE name = '" + credentials.BusinessName + "' AND password = '" + credentials.Password + "';";
                Business response = dbAccess.LoadDataSingle<Business>(sql);
                if (response == null)
                {
                    return BadRequest("Invalid");
                }
            */
            //Temp
            int Id = 1;
            if(credentials.BusinessName == "Börje" && credentials.Password == "Lingon")
            {

            }
            return Ok(new Dictionary<string, string> {
                {"token", token.CreateToken(Id)}
            });
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
