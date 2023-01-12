const express = require('express');
const app = express();

const UserRoute = require("./api/user");

const port = 3001;

app.use(express.json());

app.get('/' , (req, res) =>{
    res.send("HEllo")
  })


//   app.post("/api/user/test", async (req, res) => { 

//     console.log("req.body : ",req.body);
//     res.send( req.body )
// })
app.use('/user/' ,  UserRoute);

  app.listen(port , () => {

    console.log("Server is running on ", port)
  })