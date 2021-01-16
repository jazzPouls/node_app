const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("WEOMAOEMFWE toteh qwhome epabge")
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("RUNNNAISDFNSIDFNANG")
});