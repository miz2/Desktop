const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'resteraunts';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('restaurants');

  collection.find({}).toArray((err, documents) => {
    if (err) throw err;

    console.log(documents);
    client.close();
  });
});
