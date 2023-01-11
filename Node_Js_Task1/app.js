const http = require('http');
const data = require('./data1')
const fs = require('fs')

const server = http.createServer((req, res) => {

   //get whole data
   if (req.url === '/api/getAlldata' && req.method === "GET") {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.write(JSON.stringify(data))
      res.end()
      
   }


   //get the data by id
   else if (req.url.match(/\/data\/([0-9]+)/) && req.method === "GET") {
      const paramID = req.url.split("/").pop()
      const info = data.find((doc) => {
         return doc.id == Number(paramID)
      })
      if (!info) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: error }));
      }
      res.writeHead(200, { 'content-type': 'text/json' })
      res.write(JSON.stringify(info))
      res.end()
   }


   //delete the data
   else if (req.url.match(/\/data\/([0-9]+)/)  && req.method === "DELETE") {
      const paramID = req.url.split("/").pop()
      const info = data.find((doc) => {
         return doc.id == Number(paramID)
      })
      if (!info) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: error }));
      }
      const result = data.filter((doc) => {
         return doc.id !== Number(paramID)
      })
      res.writeHead(200, { 'content-type': 'text/json' })
      res.write(JSON.stringify(result))
      res.end()
   }


   // PUT request, update any one of the objects 
   else if (req.url.match(/\/data\/([0-9]+)/)  && req.method === "PUT") {
      const paramID = req.url.split("/").pop()
      const info = data.find((doc) => {
         return doc.id == Number(paramID)
      })
      if (!info) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: error }));
      }
      var body = '';
      req.on('data', function (data) { body += data; });
      req.on('end', function () {
         var { title } = JSON.parse(body);
         console.log(title);
         const result = data.map(doc => {
            if (doc.id === Number(paramID)) {
               doc.title = title
            }
            console.log(paramID);
            return doc
         })
         res.writeHead(200, { 'content-type': 'text/json' })
         res.write(JSON.stringify(result))
         res.end();
      });
   }


   //POST request, create & append a new object 
   else if (req.url === '/api/Postdata' && req.method === "POST") {
      var body = '';
      req.on('data', function (data) { body += data; });
      req.on('end', function () {
         var newDoc = JSON.parse(body);
         console.log(newDoc);
         let newData = {
            id: Math.floor(4 + Math.random() * 10),
            ...newDoc,
         };
         res.writeHead(200, { 'content-type': 'text/json' })
         res.write(JSON.stringify([...data, newData]))
         res.end();



         //Write the final result obtained on a file as well.
         var obj = [...data, newData]
         var json = JSON.stringify(obj, null, 2)
         console.log("hi", obj);
         fs.writeFile("./Node_Js_Task1/result.json", json, (err) => {
            if (err) {
               console.error(err)
               throw err
            }
         });
      });
   }

})

server.listen(5000)