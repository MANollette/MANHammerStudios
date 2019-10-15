using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MANHammerStudios.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AboutMe()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Developer()
        {
            ViewBag.Message = "Developer Introduction Page";

            return View();
        }

        public ActionResult Test()
        {
            ViewBag.Message = "Test Page";

            return View();
        }

        public ActionResult Gallery()
        {
            ViewBag.Message = "Gallery page.";

            return View();
        }

        public ActionResult Pricing()
        {
            ViewBag.Message = "Pricing information.";

            return View();
        }
    }
}