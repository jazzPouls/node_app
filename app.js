const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("started mongodbPROJ NDOMEODN")
});

app.get('/api/users', (req, res) => {
    res.send("api called");
});

const port = process.env.port || 3000;

// AWS EB port = 8080;
app.listen(port, () => {
    console.log("port used is : " + port);
    console.log("Starting mongodb proj NOEMONED");
});