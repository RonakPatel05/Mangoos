
// change 'localhost' to 127.0.0.1

const {MongoClient} = require('mongodb');
const url = 'localhost://27017/ronak.playlists';
const client = new MongoClient(url);
const database = 'playlist';

async function getData()
{
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData()