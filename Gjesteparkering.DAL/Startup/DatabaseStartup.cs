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

            //The Entity Framework provider type 'System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer'
            //for the 'System.Data.SqlClient' ADO.NET provider could not be loaded. 
            //Make sure the provider assembly is available to the running application. 
            //See http://go.microsoft.com/fwlink/?LinkId=260882 for more information.
            var instance = System.Data.Entity.SqlServer.SqlProviderServices.Instance;

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