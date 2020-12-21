using System.Data.SqlClient;
using Dapper;
using System.Collections.Generic;

namespace Tiantianup.Helper
{

    public class SQLHelper{
        public SQLHelper()
        {
            
        }

        public T QueryFirst<T>(string sql)
        {
            string connstring = "Data Source=127.0.0.1;initial catalog=Tiantianup;User ID=sa;Password=p@ssw0rd;Persist Security Info=False;";
            using(var conn = new SqlConnection(connstring))
            {
                return conn.QueryFirst<T>(sql);
            }
        }

        public IEnumerable<T> QueryList<T>(string sql){
            
            string connstring = "Data Source=127.0.0.1;initial catalog=Tiantianup;User ID=sa;Password=p@ssw0rd;Persist Security Info=False;";
            using(var conn = new SqlConnection(connstring))
            {
                return conn.Query<T>(sql);
            }
        }

        public int AddData(string sql){
            
            string connstring = "Data Source=127.0.0.1;initial catalog=Tiantianup;User ID=sa;Password=p@ssw0rd;Persist Security Info=False;";
            using(var conn = new SqlConnection(connstring))
            {
                return conn.Execute(sql);
            }
        }
    }
}