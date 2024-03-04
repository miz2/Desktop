const express = require("express")
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db')

// init app and midddleware
const app = express()
// to parse the json
app.use(express.json())
// database connection
let db;
connectToDb((err) => {
    if (!err) {
        app.listen(8001, () => {
            console.log("app listening on port 8001");
        })
        db = getDb()
    }

})

// routes
app.get('/books', (req, res) => {
    // current page
    const page=req.query.p||0;
    const booksPerPage=3
    let books=[]
    // fetching data using cursors
    db.collection('books')
    // returns a cursor:fetch the data:cursor toArray forEach
     .find()
     .sort({author:1})
     .skip(page*booksPerPage)
     .limit(booksPerPage)
     .forEach(book=>books.push(book))
     .then(()=>{
        res.status(200).json(books)
     })
     .catch(()=>{
        res.status(500).json({error:'Could not fetch the data'})
     })
})

// finding single documents 
app.get('/books/:id', (req, res) => {
    // when not present with some id it will return null
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .findOne({ _id: new ObjectId(req.params.id) })  // Use new without invoking as a constructor
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
    }
    else{
        res.status(500).json({ error: 'Not a valid id' });
    }
    
});

// handling a post request
app.post('/books', (req, res) => {
    const book = req.body;
    db.collection('books')
      .insertOne(book)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({ err: 'Could not create a new document' });
      });
  });
  
// now go to postman and create a post request
app.delete("/books/:id",(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .deleteOne({ _id: new ObjectId(req.params.id) })  // Use new without invoking as a constructor
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not delete the document' });
        });
    }
    else{
        res.status(500).json({ error: 'Not a valid id' });
    }
})

// patch request to update 
app.patch('/books/:id',(req,res)=>{
    const updates=req.body;
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .updateOne({ _id: new ObjectId(req.params.id) },{$set:updates})  // Use new without invoking as a constructor
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not update the document' });
        });
    }
    else{
        res.status(500).json({ error: 'Not a valid id' });
    }
})
