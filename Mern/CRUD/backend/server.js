const express = require("express");
const cors = require("cors")
const mysql = require("mysql");

const app = express();

app.use(cors());
// write database connection here 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "MDEMO"

})
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database as ID ' + db.threadId);
});
// READ DATA FROM THE TABLE 

// get :select post:insert update delete
app.get("/", (req, res) => {
    const sql = "SELECT * FROM STUDENT";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})
app.use(express.json())

// insert data into database
app.post("/create", (req,res) =>{
    const sql = "insert into student (Name,Email) value (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err,data) => {
         if(err) return res.json("error");
         return res.json(data);   
    })
}) 
// DELETE a student by ID
// DELETE a student by name
app.delete("/deleteByName/:name", (req, res) => {
    const studentName = req.params.name;
    const sql = "DELETE FROM student WHERE Name = ?";
    
    db.query(sql, [studentName], (err, data) => {
      if (err) {
        console.error("Error deleting student: " + err);
        return res.status(500).json("Error deleting student");
      }
  
      return res.status(200).json("Student deleted successfully");
    });
  });
  
  
app.listen(8081, () => {
    console.log("Listening on Port no 8081");
})
