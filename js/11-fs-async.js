const { readFile,writeFile } = require('fs')

readFile('./js/content/frist.txt','utf8',(err,result) => {
    if(err) {
        console.log(err)
        return
    }
    //console.log(result)
    const frist = result;
    
    readFile('./js/content/second.txt','utf8',(err,result) => {
      if(err) {
        console.log(err)
        return
       }
        //console.log(result)
        const second = result;
        writeFile('./js/content/result-async.txt',`Here is the result: ${frist} , ${second}`,(err,result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })})
   

    

})
