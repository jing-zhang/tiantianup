using System;
using MongoDB.Driver;
using MongoDB.Bson;
using Tiantianup.Model;
using System.Collections.Generic;
using System.Text.Json;

namespace Tiantianup.Helper
{
    public class MongoHelper
    {
        IMongoClient _client { get; set; }

        public IMongoDatabase _database { get; private set; }

        const string CONN_STR = "mongodb://localhost:27017";

        const string DB_NAME = "tiantianup";

        public MongoHelper()
        {
            _client = new MongoClient(CONN_STR);
            _database = _client.GetDatabase(DB_NAME);
        }

        public void addPerson(Person p)
        {
            var people = _database.GetCollection<BsonDocument>("people");
            people.InsertOne(p.ToBsonDocument());
        }

        public IEnumerable<BsonDocument> listPeople(){
            var bPeople = _database.GetCollection<BsonDocument>("people");
            return bPeople.Find(new BsonDocument()).ToList();
        }
    }
}