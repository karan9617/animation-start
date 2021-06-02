const express = require('express')
const router = express.Router();
const parse = require('querystring');
const app = express();
const con = require('../database/dbconnect');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {


    var firstname1 = req.body.firstname;
    var lastname1 = req.body.lastname;
    var email1 = req.body.email;
    var password1 = req.body.password;



    var sql = "INSERT INTO user (firstname, lastname,email,password) VALUES ('" + firstname1 + "', '" + lastname1 + "', '" + email1 + "','" + password1 + "')";

    con.query(sql, function (err, result) {
        if (err) throw err;

        res.send(JSON.stringify(result))

    });

    con.end();
})

module.exports = router;