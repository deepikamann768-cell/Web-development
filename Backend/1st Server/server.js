//Step 1: Import the Required Modules - Build in modules and external modules(Installation required)
//How to import modules in Node js
//1. Common Js Modules -require() -Default in Node js
//@. ES6 Modules - import - Need to enable in Package.json
const http = require("http"); //http is a module by using require we import the module

//Step 2: Create a server = BAckend application that listens to incoming Requests and send Response Back to the user
const server = http.createServer((req, res)=>{
//req - Request Object - Contains Information About the incoming Request
//res - Response Object - Used to send Response Back to the client

res.write("Hello world fom Node js Server");
res.end(); //End the response - Send the response back to the client
});

//Step 3 : Start the server and listens to incoming requests on a specific part
//Port - A number that identifies a specific process on the server - Common Ports - 80(HTTP), 443(HTTPS)
server.listen(3000, ()=>{ //inbuild method with http module
    console.log("server is running on port 3000"); //listen means to connect to 3000 port no.only because we hav emultiple port no. we use it to connect to a specific port number
})