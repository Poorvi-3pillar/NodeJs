const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/')
{
    res.end('Welcome to our Homepage')
}
if(req.url==='/about')
{
    res.end('Here is out short history')
}
res.end(`
<h1>Oops</h1>
<p>We Can't seem to find the page your are looking for</p>
<a href="/">back home</a>
`)
})

server.listen(5000)