
const express = require('express')
const app = express();
const port = 8000;
const con = require('./database/dbconnect');
var Router = require('router')
var bodyParser = require('body-parser')
var router = Router()

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.urlencoded({
    extended: true
}))

const loginRouter = require('./routers/login')
app.use('/login', loginRouter)


const registerRouter = require('./routers/register')
app.use('/register', registerRouter)


const getParkRouter = require('./routers/getParks')
app.use('/getParks', getParkRouter)

/*
app.get('/users', (req, res) => {
    //res.send('Hello World from users!')

    con.query("SELECT firstname, lastname FROM user", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

});
*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


// connecting to database