// Import dependencies
var express = require('express');
var bodyParser = require('body-parser'); // Parse requests
var path = require('path'); // Simplify file paths

// Initialise express
var app = express();

/* 
// Middleware example - Executes before GET handler
var logger = (req, res, next) => {
    console.log('Logging...');
    next();
};

app.use(logger);
*/

// View engine (CVM)
app.set('view engine', 'ejs');
// View path
var viewPath = path.join(__dirname, 'views')
app.set('views', viewPath);

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Static path - allows the use of static files (html, css)
staticPath = path.join(__dirname, 'client');
app.use(express.static(staticPath));

// Handle GET requests to /
app.get('/', (req, res) => {
    res.render('index');
});

// Handle POST requests
app.post('/users/add', (req, res) => {
    var newCard = {
        cardName: req.body.cardName,
        cardColour: req.body.cardColour,
        cardCost: req.body.cardCost
    };
    console.log(newCard);
});

// Run on port
var port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});