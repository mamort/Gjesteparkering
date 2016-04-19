using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Security;
using Gjesteparkering.Models;

namespace Gjesteparkering.Controllers
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {  
        [Route("login")]
        public JsonResult<AccountStatusModel> Login(LoginModel model)
        {
            var status = new AccountStatusModel();
            //if (Membership.ValidateUser(userId, password))
            if(model.Username == "test" && model.Password == "test")
            {
                FormsAuthentication.SetAuthCookie(model.Username, model.RememberMe);
                status.Success = true;
                status.TargetURL = FormsAuthentication.
                                   GetRedirectUrl(model.Username, model.RememberMe);
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

        [Route("logout")]
        public JsonResult<AccountStatusModel> Logout(LogoutModel model)
        {
            var status = new AccountStatusModel();
            //if (Membership.ValidateUser(userId, password))
            if (model.Username == "test")
            {
                FormsAuthentication.SignOut();
                status.Success = true;
                if (string.IsNullOrEmpty(status.TargetURL))
                {
                    status.TargetURL = FormsAuthentication.DefaultUrl;
                }
                status.Message = "Logout attempt successful!";
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
}
