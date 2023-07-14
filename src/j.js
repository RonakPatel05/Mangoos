const{MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const database="ronak"
const client=new MongoClient(url);



async function getdata()
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection("playlists");
    let response =await collection.find({}.toArry());
    console.log(response);
}


getdata();