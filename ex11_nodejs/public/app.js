const http = require("http");
const path = require("path");
const fs = require('fs');
const fsp = require('fs').promises;


http.createServer(async function (request, response) {

    let filePath = "." + request.url;
    let max;
    let random_number;
    
    if (filePath == "./") {
        filePath = "../example/example.html";
    }
    else if(filePath == "./random"){
        filePath = "../example/example.html";
        random_number = await Math.random();
    }
    else if(filePath.startsWith("./random?max=")){
        filePath = "../example/example.html";
        max =  request.url.substring(12);
        random_number = Math.random()*max;
    }


    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm"
    };

    console.log(`Numero aleatório gerado entre 0 e ${max}: ${random_number}`);
    const contentType = mimeTypes[extname] || "application/octet-stream";
    
    await fsp.readFile(filePath).then(content =>{
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
    }).catch(err =>{
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(err, "utf-8");
    });
})
.listen(8125);
console.log("Server running at http://127.0.0.1:8125/");

