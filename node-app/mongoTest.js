const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "nodeAppDB";
const collectionName = "userTable";

var doc = {
    name: 'testName3',
    id: 3
}

async function addData(doc) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne(doc);
    console.log("Inserted document:", result.insertedId);

  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

async function run() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const docs = await collection.find({}).toArray();
    console.log("Documents:", docs);

  } catch (err) {
    console.log("Error:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run();
addData(doc);
run();
