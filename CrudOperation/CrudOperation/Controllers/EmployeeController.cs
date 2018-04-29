using CrudOperation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudOperation.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetEmployee()
        {
            MyDatabaseEntities dc = new MyDatabaseEntities();
            List<tblEmployee> ListOfEmployee = dc.tblEmployees.ToList();
            return Json(ListOfEmployee, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult SaveEmployee(tblEmployee emp)
        {
            MyDatabaseEntities dc = new MyDatabaseEntities();
            dc.tblEmployees.Add(emp);

            //try datos
            try
            {
                dc.SaveChanges();
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
            {
                Exception raise = dbEx;
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        string message = string.Format("{0}:{1}",
                            validationErrors.Entry.Entity.ToString(),
                            validationError.ErrorMessage);
                        // raise a new exception nesting
                        // the current instance as InnerException
                        raise = new InvalidOperationException(message, raise);
                    }
                }
                throw raise;
            }


            //Datos


            List<tblEmployee> ListOfEmployee = dc.tblEmployees.ToList();
            return Json(ListOfEmployee, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public JsonResult GetemployeeByID(int id)
        {
            MyDatabaseEntities dc = new MyDatabaseEntities();
            tblEmployee emp = new tblEmployee();
            emp = dc.tblEmployees.Find(id);
            return Json(emp, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult UpdateData(tblEmployee emp)
        {
            MyDatabaseEntities dc = new MyDatabaseEntities();
            dc.Entry(emp).State = System.Data.Entity.EntityState.Modified;
            dc.SaveChanges();
            List<tblEmployee> ListOfEmployee = dc.tblEmployees.ToList();
            return Json(ListOfEmployee, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public JsonResult DeleteEmployee(int id)
        {
            MyDatabaseEntities dc = new MyDatabaseEntities();
            tblEmployee emp = new tblEmployee();
            emp = dc.tblEmployees.Find(id);
            dc.Entry(emp).State = System.Data.Entity.EntityState.Deleted;
            dc.SaveChanges();
            List<tblEmployee> ListOfEmployee = dc.tblEmployees.ToList();
            return Json(ListOfEmployee, JsonRequestBehavior.AllowGet);
        }
    }
}