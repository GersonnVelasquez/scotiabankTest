path = require('path');
express = require('express');
app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/scotiabank'));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/scotiabank/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);