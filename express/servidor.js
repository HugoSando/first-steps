const express = require("express");
const app = express();
const path = require("path");


app.get("/", inicio);
app.get("/love", love);



function inicio (request, result)
{
    result.sendFile( path.join(__dirname + "/inicio.html") );
}

function love (request, result)
{
    result.sendFile( path.join(__dirname + "/index.html") );
}


app.listen(8080);