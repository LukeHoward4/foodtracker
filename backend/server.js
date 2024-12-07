const express = require('express')
const app = express()
const port = process.env.port || 3001;
const mysql= require("mysql2")
const cors = require("cors")
const pool = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"Kapsig200319!",
  database: "finalprojectdatabase",
  connectionLimit:10
})
app.use(cors())

const corsOptions = {
    origin: "http://localhost:3000",
    allowHeaders: ["Content-type", "Authorization"]
};
pool.query('select * from finalprojectdatabase.account', ( err, res)=>{
  return console.log(res)
})
const foods = [
    { id: 1, name: 'Banana', type: 'fruit', calories: 50 },
    { id: 2, name: 'Apple', type: 'fruit', calories: 75 },
    { id: 3, name: 'Sourdough', type: 'bread', calories: 100 },
    { id: 4, name: 'Beans', type: 'protein', calories: 100 },
    { id: 5, name: 'Steak', type: 'protein', calories: 200 },
    { id: 6, name: 'Broccoli', type: 'vegetable', calories: 50 },
  ];
app.get('/api/foods', (req, res) => {
    res.json(foods);
  });
app.listen(port, () => console.log("app running on port " + port))
