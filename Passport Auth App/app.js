const express = require('express');
const expressLayouts=require('express-ejs-layouts')
const app = express();
const mongoose=require('mongoose');

// db config
const db=require('./config/keys').MongoURI

// connect to Mongo
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>{
    console.log('MongoDB connected');
})
.catch((err)=>{
    console.log(err);
})
// ejs
app.use(expressLayouts)
app.set('view engine','ejs')

// Bodyparser

app.use(express.urlencoded({extended:false}))
// Import the main routes
const mainRoutes = require('./routes/index');
const usersRoutes = require('./routes/users'); // Fix the path here

// Use the main routes
app.use('/', mainRoutes);
app.use('/users', usersRoutes); // Fix the path here

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
