using System.Data.Entity;
using Castle.Core;
using Gjesteparkering.DAL.Migrations;
using log4net;

namespace Gjesteparkering.DAL
{
    public class DatabaseStartup : IStartable
    {
        private static readonly ILog _log = LogManager.GetLogger(typeof(DatabaseStartup));

        public void Start()
        {
            _log.Info("Database startup");
            // Reference dlls that are indirectly referenced and not always included in build
            var x = typeof(System.Data.Entity.SqlServer.SqlProviderServices);

            var context = new GjesteparkeringContext();
            var initializeDomain = new CreateDatabaseIfNotExists<GjesteparkeringContext>();
            var initializeMigrations = new MigrateDatabaseToLatestVersion<GjesteparkeringContext, Configuration>();

            initializeDomain.InitializeDatabase(context);
            initializeMigrations.InitializeDatabase(context);
        }

        public void Stop()
        {
        }
    }
}