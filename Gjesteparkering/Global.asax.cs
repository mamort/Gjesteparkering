using System;
using System.IO;
using System.Web.Http;
using System.Web.Routing;
using System.Web.Security;
using Gjesteparkering.Framework;
using log4net;
using log4net.Config;

namespace Gjesteparkering
{
    public class Global : System.Web.HttpApplication
    {
        private static readonly ILog _log = LogManager.GetLogger(typeof(Global));

        protected void Application_Start(object sender, EventArgs e)
        {
            XmlConfigurator.ConfigureAndWatch(new FileInfo(Server.MapPath("~/log4net.config")));

            _log.Info("Application start");
            WindsorService.Initialize();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            //MembershipCreateStatus status;
            //Membership.CreateUser("Test", "Test123456!", "test@test.com", "question", "answer", true, out status);
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}