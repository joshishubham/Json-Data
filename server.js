 var express = require("express");
 var fs = require('fs');
 var app = express();

 var Data = fs.readFileSync("user.json");

 var Jdata = JSON.parse(Data);

 app.get("/jsonData" ,function (req, res) {

 res.send(Jdata)
 
 });

 app.get("/json/:name/:id" ,function (req, res) {
        
        var name = req.params.name;
        var id   = req.params.id;
      
        Jdata[name] = id;
       
       var jsonData = JSON.stringify(Jdata, null, 2);
       
        fs.writeFile("user.json", jsonData, function (err, show) {

              if (err) throw err

                 console.log(show)
        });

         var data = {

            msg: "Your data save successfully"
        
        }
       
       res.send(data)

 });

 app.listen(4040, console.log("http://localhost:4040"));