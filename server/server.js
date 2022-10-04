var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(express.json());




// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'muzik',
    port: 3306,
    password: 'Hasanmutlu12?',
    database: 'muzik'
});


// connect to database
dbConn.connect();


// Retrieve all users 
app.get('/muzikler', function (req, res) {

    dbConn.query('SELECT * FROM muzikler ', function (error, results, fields) {
        
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    })
});


// Retrieve muzikler with id 
app.get('/muzikler/:id', function (req, res) {

    let id  = req.params.id ;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }

    dbConn.query('SELECT * FROM muzikler WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});



 // Retrieve muzikler with id 
app.post('/muzikler/:id', function (req, res) {

    let id  = req.params.id ;

    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }

    dbConn.query('UPDATE muzikler SET puan = puan + 5 WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});



// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;