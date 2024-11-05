const express = require("express");
const redis = require("redis");
const process = require("process");
const { hostname } = require("os");

const app = express();
const client = redis.createClient({
    // url: "redis://redis-server:6379",
    host: "redis-container",
    port: 6379
});

client.set("visits", 0); // setting initial value to 0

app.get('/', (req, res) => {
    // process.exit(0);
    client.get('visits', (err, visits) => {
        res.send("No of visits is " + visits);``
        client.set('visits', parseInt(visits)+1);
    });
})

app.listen(8081, () => {
    console.log("App is Listening on Port 8081")
})