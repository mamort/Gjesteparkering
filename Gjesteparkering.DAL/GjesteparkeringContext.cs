using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Gjesteparkering.DAL
{
    public class GjesteparkeringContext : DbContext
    {
        public GjesteparkeringContext() : base("dbGjesteparkering")
        {
        }

        public DbSet<Parkeringsplass> Parkeringsplasser { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}