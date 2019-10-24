const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");


const { runQuery, addEmail, query, editInfo, cancelBooking, adminQuery, adminInfo, surveyorQuery, surveyorInfo, surveyInfo } = require("./utils/app");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/data", async (req, res) => {
    try {
      console.log("data hit")
  const data = await runQuery();
    console.log(data)
    res.send({
      data: data.data[0]
    })
  } catch (error) {
    console.log(error)
    
  };
    });
    


  app.get("/adminInfo", async (req, res) => {
    const data = await adminInfo();
   
    res.send({
      data: data
    });
    
  });

  
  app.get("/info", async (req, res) => {
    let data = await runQuery(req.query.id)
    res.send(data)

  })

  app.get("/pull", async (req, res) => {
    let data = await query(req.query.email, req.query.password);
    // try { 
    console.log(data)
    res.send(data)
    // } catch(error) {
      
    //   res.send("Bad password")
    // }
    

  })

  app.get("/adminlogin", async (req, res) => {
    let data = await adminQuery(req.query.email, req.query.password);
    
    console.log(data)
    res.send(data)
    

  })

  app.get("/surveyorlogin", async (req, res) => {
    let data = await surveyorQuery(req.query.email, req.query.password);
    
    console.log(data)
    res.send(data)
    

  })

  app.post("/register", (req, res) => {
    addEmail(req.body);
  
    console.log(`The email which has just been added is ${req.body.email}`.green);
    res.send("POST request to the homepage");
  });
  
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  
  app.put("/update", (req, res) => {
    editInfo(req.body)

  })

  app.put("/survey", (req, res) => {
    surveyInfo(req.body)

  })

  app.put("/cancel", (req, res) => {
    console.log(req.body)
    cancelBooking(req.body)

  })

  app.get("/surveyorInfo", async (req, res) => {
    const data = await surveyorInfo(req.query.id);
   
    res.send({
      data: data
    });
    
  });