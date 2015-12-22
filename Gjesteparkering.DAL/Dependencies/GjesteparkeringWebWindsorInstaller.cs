using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Gjesteparkering.Business;
using Gjesteparkering.Framework;
using log4net;

namespace Gjesteparkering.DAL
{
    public class GjesteparkeringDALWindsorInstaller : AbstractWindsorInstaller
    {
        private static readonly ILog _log = LogManager.GetLogger(typeof(GjesteparkeringDALWindsorInstaller));

        protected override void Install(IWindsorContainer container)
        {
            _log.Info("Register DAL dependencies");
            RegisterStartable(Classes.FromThisAssembly());
            RegisterPrUnitOfWork<IGjesteparkeringRepository, GjesteparkeringRepository>();
        }
    }
}