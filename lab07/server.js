const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')
port = 3000

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "64107899",
    database: "itd62-276"
})

db.connect((err) => {
    if (err) { err }
    console.log("MySQL connected")
})

app.get('/', (req, res) => {
    res.send('Hello Backend ')
})



app.get('/getUser', (req, res,) => {
    db.query("SELECT * FROM user", (error, results, fields) => {
        if (error) throw error
        if (results.length == 0 || results === undefined)
            message = "Table user is emty !"
        else
            message = "Get user succesfuly.";
        res.status(200).send({ error: false, data: results, msg: message })
    })
})

app.get('/getUser/:id', (req, res,) => {
    db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) throw error
        if (results.length == 0 || results === undefined)
            message = "User not found !"
        else
            message = "Get user succesfuly.";
        res.status(200).send({ error: false, data: results, msg: message })
    })
})

app.post('/postUser', (req, res) => {
    const object = req.body
    // db.query('INSERT INTO user (first_name, last_name, email, user_role_id) VALUES ("' + first_name + '","' + last_name + '","' + email + '","' + user_role_id + '")',
    db.query('INSERT INTO user (first_name, last_name, email, hased_password, user_role_id) VALUES(?,?,?,?,?)',
    [
        object.first_name,
        object.last_name,
        object.email,
        object.hased_password,
        object.user_role_id,
    ],
        function (err, results) {
            let message;
            if (err) {
                console.log(err);
            }
            if (results) {
                message = "OK";
            } else {
                message = "Error";
            }
            res.status(200).send({ error: false, data: results, msg: message });
        });
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM user WHERE id = ${id}`, function (err, results) {
        let message;
        if (err) {
            console.log(err);
        }
        if (results) {
            message = "OK";
        } else {
            message = "Error";
        }
        res.status(200).send({ error: false, data: results, msg: message });
    });
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    const object = req.body
    // db.query(`UPDATE user SET first_name = "${first_name}", last_name = "${last_name}", email = "${email}", user_role_id = ${user_role_id} WHERE id=${id}`, 
    db.query(`UPDATE user SET first_name = ?, last_name = ?, email = ?, hased_password = ?, user_role_id = ? WHERE id= ${id}`,
    [
        object.first_name,
        object.last_name,
        object.email,
        object.hased_password,
        object.user_role_id,

    ],
    function (err, results) {
        let message;
        if (err) {
            console.log(err);
        }
        if (results) {
            message = "OK";
        } else {
            message = "Error";
        }
        res.status(200).send({ error: false, data: results, msg: message });

    })
})


    app.listen(port, () => {
        console.log(`App is running on http://localhost:${port}`)
    })