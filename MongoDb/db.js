const {MongoClient}=require('mongodb')
let dbConnection;
module.exports={
    connectToDb:(cb)=>{
        // connect to local database and is async method
        MongoClient.connect('mongodb://localhost:27017/bookstore')

        // use with atlas
        // MongoClient.connect('mongodb+srv://Mizaan:MizMongoDb@freecodecamp.e63maaj.mongodb.net/bookstoreretryWrites=true&w=majority')
        .then((client)=>{
           dbConnection= client.db()
        //    call the callback function:that will be invoked after the connection :either failure or success
           return cb()
        })
        .catch(err=>{
            console.log(err);
            return cb(err)
        })
    },
    getDb:()=>dbConnection
    
    
}