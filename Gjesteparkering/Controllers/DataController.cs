using System.Web.Http;

namespace Gjesteparkering.Controllers
{
    [RoutePrefix("api/data")]
    public class DataController : ApiController
    {  
        [Route]
        public Data Get()
        {
            return new Data();
        }
    }

    public class Data
    {
        public string Name { get; set; }

        public Data()
        {
            Name = "Test person";
        }


    } 
}
