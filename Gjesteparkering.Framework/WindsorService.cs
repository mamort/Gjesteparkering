using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.Facilities.Startable;
using Castle.Windsor;
using Castle.Windsor.Installer;

namespace Gjesteparkering.Framework
{
    public class WindsorService
    {
        public static IWindsorContainer Container { get; private set; }

        private WindsorService()
        {
        }

        public static void Initialize()
        {
            Container = new WindsorContainer();
            Container.AddFacility<StartableFacility>();
            Container.Install(Configuration.FromAppConfig());
        }
    }
}
