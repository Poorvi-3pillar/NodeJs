const http=require('http')
const {readFileSync}=require('fs')

//get all files
const homePage=readFileSync('./navbar-app/index.html')
const homeStyles=readFileSync('./navbar-app/style.css')
const homeLogic=readFileSync('./navbar-app/browser-app.js')

const server=http.createServer((req,res)=>{
    // console.log(req.method);
   if(req.url==='/')
   {
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
   }
   //styles
   else if(req.url==='/styles.css')
   {
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()
   }

   //logic
   else if(req.url==='/browser-app.js')
   {
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeLogic)
    res.end()
   }
   else {
    console.log(req.url);
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end()
   }
     
})
server.listen(5000)