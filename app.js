const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==  "/about"){
        res.end ("The about page    jiiii  kii here")
    }

    if(req.url == "/profile"){
        res.end ("I Am Amit Gupta")
    }

    if(req.url == "/") {
        res.end("im home page")
    }
   

})


server.listen(3000, () => console.log('Server running on port 3000'))