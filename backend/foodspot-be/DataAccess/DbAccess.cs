using Npgsql;
using System.Data;
using Dapper;
using Microsoft.Data.SqlClient;


namespace ProtaskApi.DataAccess;

public class DbAccess
{

    private readonly IConfiguration _config;

    public DbAccess(IConfiguration config)
    {
        _config = config;
    }

    public T LoadDataSingle<T>(string sql)
    {
        IDbConnection dbConnection = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection"));
        return dbConnection.QuerySingle<T>(sql);
    }

    public IEnumerable<T> LoadData<T>(string sql)
    {
        IDbConnection dbConnection = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection"));
        return dbConnection.Query<T>(sql);
    }

    public bool Execute(string sql)
    {
        IDbConnection dbConnection = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection"));
        return dbConnection.Execute(sql) > 0;
    }

    public int ExecuteSqlWithRowCount(string sql)
    {
        IDbConnection dbConnection = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection"));
        return dbConnection.Execute(sql);
    }

    public bool ExecuteWithParameters(string sql, List<SqlParameter> parameters)
    {
        using (var dbConnection = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection")))
        {
            dbConnection.Open();

            using (var commandWithParams = new NpgsqlCommand(sql, dbConnection))
            {
                foreach (SqlParameter param in parameters)
                {
                    commandWithParams.Parameters.AddWithValue(param.ParameterName, param.Value);
                }

                int rowsAffected = commandWithParams.ExecuteNonQuery();

                return rowsAffected > 0;
            }
        }
    }

}