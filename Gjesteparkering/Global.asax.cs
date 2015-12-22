using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using Gjesteparkering.Framework;
using log4net;
using log4net.Config;
using log4net.Core;

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
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles); 
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