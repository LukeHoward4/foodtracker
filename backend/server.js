
const express = require('express')
const app = express()
const port = 3000;
const mysql= require("mysql2")

const pool = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"Kapsig200319!",
  database: "finalprojectdatabase",
  connectionLimit:10
})

pool.query('select * from finalprojectdatabase.account', ( err, res)=>{
  return console.log(res)
})

app.get('/', (req, res) => res.send("hello world"))
app.listen(port, () => console.log("app running on port 3000"))