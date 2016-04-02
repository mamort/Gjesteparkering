﻿using System.Web.Mvc;
using System.Web.Routing;

namespace Gjesteparkering
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default",
                "{*url}",
                new {controller = "Default", action = "Index"});
        }
    }
}

