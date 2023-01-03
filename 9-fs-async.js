const{readFile,writeFile}=require('fs')

 console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result
        console.log(second);
        writeFile(
            './content/result-async.txt',
            `Here is the result:${first},${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log('callback hell');
            }
        )
        
    
    })

})
console.log('starting next task');