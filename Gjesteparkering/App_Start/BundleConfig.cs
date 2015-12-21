using System.Web.Optimization;

namespace Gjesteparkering
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                        "~/Content/Components/jquery/dist/jquery.js",
                        "~/Content/Components/react/react.js",
                        "~/Content/Components/react/react-dom.js",
                        "~/Content/Components/bootstrap/dist/js/bootstrap.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/Content/Components/bootstrap/dist/css/bootstrap.css",
                      "~/Content/css/site.css"));
        }
    }
}
