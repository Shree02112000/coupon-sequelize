const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const routes = require("./routes/routes")
 app.use(express.json());
 app.use(express .urlencoded({extended:true}));

 const PORT = 5001;
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
 })

 app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
 const db = require("./models/index");
 app.use('/api',routes)
 db.sequelize.sync()
   .then(() => {
     console.log("Synced db.");
   })
   .catch((err) => {
     console.log("Failed to sync db: " + err.message);
   });

   db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });