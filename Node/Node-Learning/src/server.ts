import { createServer, IncomingMessage, Server } from "http";

const server : Server = createServer((req : IncomingMessage,res)=>{
    // console.log(req.url); "/", "/user", "/products"
    // console.log(req.method); "GET", "POST", "DELETE"
    const url = req.url
    const method = req.method
    if(url === "/" && method === "GET"){
        // console.log("This is Root route");
        res.writeHead(200,{"content-type" : "application/json"})
        res.end(JSON.stringify({message : "This is Root route"}));
    }
    else if(url?.startsWith('/products')){
        res.writeHead(200,{"content-type" : "application/json"})
        res.end(JSON.stringify({message : "This is Products route"}));
    }
    else{
        res.writeHead(400,{"content-type" : "application/json"})
        res.end(JSON.stringify({message : "Route not found"}));
    }
})

server.listen(5000,()=>{
    console.log(`Server is running on the port 5000`);
})