using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Security;

namespace Gjesteparkering.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {  
        [Route]
        public JsonResult<LoginStatus> Post(LoginData login)
        {
            var status = new LoginStatus();
            //if (Membership.ValidateUser(userId, password))
            if(login.Username == "test" && login.Password == "test")
            {
                FormsAuthentication.SetAuthCookie(login.Username, login.RememberMe);
                status.Success = true;
                status.TargetURL = FormsAuthentication.
                                   GetRedirectUrl(login.Username, login.RememberMe);
                if (string.IsNullOrEmpty(status.TargetURL))
                {
                    status.TargetURL = FormsAuthentication.DefaultUrl;
                }
                status.Message = "Login attempt successful!";
            }
            else
            {
                status.Success = false;
                status.Message = "Invalid UserID or Password!";
                status.TargetURL = FormsAuthentication.LoginUrl;
            }
            return Json(status);
        }
    }

    public class LoginData
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }

    public class LoginStatus
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public string TargetURL { get; set; }
    }

}
