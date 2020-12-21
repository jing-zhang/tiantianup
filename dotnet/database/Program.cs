using System;
using Tiantianup.Helper;
using Tiantianup.Model;


namespace Tiantianup
{
    class Program
    {
        static void Main(string[] args)
        {
            //var sqlHelper = new SQLHelper();
            // var p = sqlHelper.QueryFirst<Person>("select firstname, lastname, age from people");

            // Console.WriteLine($"Hello {p.firstname}!");

            var mongoHelper = new MongoHelper();
            //mongoHelper.addPerson(new Person{ firstname = "John", lastname="Due", age = 23});

            var people = mongoHelper.listPeople();
            foreach (var p in people)
            {
                Console.WriteLine($"Hello {p}!");
            }
        }
    }
}
