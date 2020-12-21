var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("tiantianup");
  var person = { firstname: "name1", lastname:"name2",age:34 };
  dbo.collection("people").insertOne(person, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});