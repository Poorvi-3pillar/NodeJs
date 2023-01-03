const logger=require('./logger')
const authorize=require('./authorize')
//req=>middleware=>res

//1.use vs route
//2.options-our own/express/third party



app.use([logger,authorize])
//app.use parameter

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
