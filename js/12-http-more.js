const http = require('http')

const server = http.createServer((req, res) => {
 //console.log(req)
    if(req.url ==='/') 
    {
        return res.end('Welcome to your home page')   
    }
    if (req.url ==='/about') 
    {
       return  res.end('Here is our short histroy') 
    }
     return res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find out page you are looking for </p>
    <a href="/">Back home</a>`)

})
    
server.listen(5003)


   //res.write('Welcome to your home page')
    //res.end()



