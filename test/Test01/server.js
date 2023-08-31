const express = require('express')
const app = express()
const cors = require('cors')
const mysql2 = require('mysql2')
port = 3000

app.use(cors())
app.use(express.json())

const db = mysql2.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'64107899',
    database:'car_db'
})

db.connect((error)=>{
    if(error){error}
    console.log("MySQL connected")
})

app.get('/' ,(req, res)=>{
    res.send('Hello Test01 ')
})

app.get('/getCar', (req, res) => {
    db.query("SELECT * FROM car_table",(error,results,fields)=>{
        if(error) throw error
        if(results.length==0 || results===undefined)
            message ="Table car_db is emty !"
        else
            message = "Get car_db succesfuly.";
        res.status(200).send({error:false,data:results,msg:message})
    })
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})