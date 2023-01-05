const http=require('http');
const { getReqData } = require("./utils");
const data=require('./data')
const url=require('url');
const { title } = require('process');
const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true)
    const obj= Object.keys(parsedurl.query)
    if(req.url==='/api/data' && req.method === "GET")
    {
     console.log(req.url);
     res.writeHead(200,{'content-type':'application/json'})
     res.write(JSON.stringify(data))
     res.end()
    }

    //get the data by id
    else if(req.url!=='/api/data' && req.method === "GET" && obj[0]=='id')
    {
     const id = parsedurl.query.id
     console.log(data);
     const info = data.find((doc) => {
        console.log(doc);
       return doc.id == Number(id)
    })
     console.log(info);
     if (!info) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: error }));
     }
     res.writeHead(200,{'content-type':'text/json'})
     res.write(JSON.stringify(info))
     res.end()
    }


    //deleting the  data
    else if(req.url!=='/api/data' && req.method === "DELETE" && obj[0]=='id')
    {
     const id = parsedurl.query.id
     console.log(data);
     const info = data.find((doc) => {
        console.log(doc);
       return doc.id == Number(id)
    })
     console.log(info);
     if (!info) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: error }));
     }
     const result = data.filter((doc) => {
        console.log(doc);
       return doc.id !== Number(id)
    })
     res.writeHead(200,{'content-type':'text/json'})
     res.write(JSON.stringify(result))
     res.end()
    }


    //updating data
    else if(req.url!=='/api/data' && req.method === "PATCH" && obj[0]=='id')
    {
        console.log("hi",req);
     const id = parsedurl.query.id
     console.log(data);
    //  const { title } = req.body
     const info = data.find((doc) => {
        console.log(doc);
       return doc.id == Number(id)
    })
     console.log(info);
     if (!info) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: error }));
     }
     const updatedData = data.map((doc) => {
        if (doc.id === Number(id)) {
          doc.title =req.body
        }
        return doc
      })
     res.writeHead(200,{'content-type':'text/json'})
     res.write(JSON.stringify(updatedData))
     res.end()
    }
})

server.listen(5000)