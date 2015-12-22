namespace Gjesteparkering.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Parkeringsplass",
                c => new
                    {
                        ParkeringsplassId = c.Long(nullable: false, identity: true),
                        Navn = c.String(),
                    })
                .PrimaryKey(t => t.ParkeringsplassId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Parkeringsplass");
        }
    }
}
