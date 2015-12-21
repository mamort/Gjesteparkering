using Castle.Windsor;
using Gjesteparkering.Business;
using Gjesteparkering.Framework;

namespace Gjesteparkering.DAL
{
    public class GjesteparkeringDALWindsorInstaller : AbstractWindsorInstaller
    {
        protected override void Install(IWindsorContainer container)
        {
            RegisterPrUnitOfWork<IGjesteparkeringRepository, GjesteparkeringRepository>();
        }
    }
}