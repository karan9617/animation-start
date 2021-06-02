const express = require('express')
const router = express.Router();
const parse = require('querystring');
const app = express();
const con = require('../database/dbconnect');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {


    var parkname = req.body.partname;




    var sql = "SELECT * FROM parks where park_id = 1;";

    con.query(sql, function (err, result) {
        if (err) throw err;

        res.send(result);

    });

})

module.exports = router;