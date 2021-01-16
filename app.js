const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("GETtING RId OF 502")
});

const port = process.env.port || 3000;
// const port = 3001;
// const port = 8081;
app.listen(port, () => {
    console.log("port used is : " + port)
    console.log("geEETIINNG RID OF 502 ERROR")
});