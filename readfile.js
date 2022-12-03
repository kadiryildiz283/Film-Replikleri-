const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url = "mongodb+srv://kadir:SqziLpi4NFRWSqW5@cluster0.jsa9syf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "Cluster0";

var film=[];
async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");

         const db = client.db(dbName);
         const col = db.collection("veri");

         const cursor = col.find({});
         await cursor.forEach(doc =>
            film.push(doc.film)
            );
        module.exports = {film};

        } catch (err) {
         console.log(err.stack);
     }


     finally {
        await client.close();
    }
}
run().catch(console.dir);
