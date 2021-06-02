const express = require('express')
const router = express.Router();
const con = require('../database/dbconnect');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

router.post('/', (req, res) => {

    var username1 = req.body.email;
    var password1 = req.body.password;



    var sql = "SELECT * FROM user where email = '" + username1 + "' AND password = '" + password1 + "'";

    con.query(sql, function (err, result) {
        if (err) {

            res.setHeader('Content-Type', 'application/json');
            res.json({ "message": "no such user exists" });

        }

        else {
            res.send(result);
        }

    });


})


module.exports = router;