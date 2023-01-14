const express=require('express')
require('./NodeJs_withExpress/config')
const products=require('./NodeJs_withExpress/data')
const app=express();

//middleware
app.use(express.json())

//Post API
app.post('/create',async(req,res)=>{
    let data=new products(req.body)
    let result=await data.save();
    console.log(req.body);
    res.send(result);

})

//Get API with id
app.get("/list/:id", async (req, resp) => {
    let data = await products.find(req.params);
    resp.send(data);
})


//delete the data Delete API
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await products.deleteOne(req.params);
    resp.send(data);
})

//update the data Update API
app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await products.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
  })