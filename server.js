const express = require('express');
const app = express();
const path = require('path');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(jsonParser);
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(path.join(__dirname, "client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('citrus ready and listening on port ' + port);
});