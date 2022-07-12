const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

//Index
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

//Badbage
app.get("/badbage", function(req, res){
    res.sendFile(path.join(__dirname, "/views/badbage.html"));
});

//Berners-lee
app.get("/berners-lee", function(req, res){
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"));
});

//Clarke
app.get("/clarke", function(req, res){
    res.sendFile(path.join(__dirname, "/views/clarke.html"));
});

//Hamilton
app.get("/hamilton", function(req, res){
    res.sendFile(path.join(__dirname, "/views/hamilton.html"));
});

//Hopper
app.get("/hopper", function(req, res){
    res.sendFile(path.join(__dirname, "/views/hopper.html"));
});

//Lovelace
app.get("/lovelace", function(req, res){
    res.sendFile(path.join(__dirname, "/views/lovelace.html"));
});

//Turing
app.get("/turing", function(req, res){
    res.sendFile(path.join(__dirname, "/views/turing.html"));
});