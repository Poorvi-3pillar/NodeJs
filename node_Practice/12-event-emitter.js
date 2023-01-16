//Event Emitter as hhtp module

const http = require('http')

//const server=http.createServer((req,res)=>{
//  res.end('Welcome')
// })

//Using Event Emitter API
const server=http.createServer()
//emits request event
//subscribe to it/listen to it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)

// const EventEmitter=require('events')

// const customEmitter=new EventEmitter()
// customEmitter.on('response',(name,id)=>{
//     console.log(`data recieved from name ${name} with the id:${id} `);
// })

// customEmitter.on('response',()=>{
//     console.log('It"s 30th December');
// })
// customEmitter.emit('response','john',34)
