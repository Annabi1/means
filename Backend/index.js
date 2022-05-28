//Dependances
require('dotenv').config()
const express=require('express')
const app=express()
const mongooose=require('mongoose')
const body=require('body-parser')
const route=require('./routes/usersAuth')
const routeTask=require('./routes/usersP')
const path = require('path');
const cors = require('cors');

//database connection
mongooose.connect(process.env.DataBase,{useNewUrlParser:true}).then(()=>{
  console.log("connected to database")
  }).catch(()=>{
  console.log("not connected")
  })
const port=process.env.Port


// ------ middleware-----//

app.use(body.json())

//CROS MW
app.use(cors());
//Static public folder
app.use(express.static(path.join(__dirname, 'public')));



// ------ middleware-----//

app.use("/usersAuth",route)
app.use("/users",routeTask)
app.listen(port,()=>
{
  console.log("Server started")
}
)
