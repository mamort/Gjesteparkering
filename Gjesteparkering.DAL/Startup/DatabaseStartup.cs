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