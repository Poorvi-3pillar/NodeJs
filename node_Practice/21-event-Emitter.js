const express=require("express")
const EventEmitter=require("event")
const app=express()
const event=new EventEmitter();

let count=0;

event.on("count",()=>{
    count++;
    console.log("event called",count);
})


app.get("/",(req,res)=>{
    res.send("api called")
    event.emit("countAPI")
});

app.get("/search",(req,res)=>{
    res.send("search called")
    event.emit("countAPI")
});

app.get("/update",(req,res)=>{
    res.send("update called")
    event.emit("countAPI")
});

api.listen(5000)
