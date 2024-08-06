const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "register"
})


//new user register
app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

//login to an account

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

//to add new expense
app.post('/expense', (req, res) => {
    const date = req.body.date;
    const amount = req.body.amount;
    const category = req.body.category;

    con.query("INSERT INTO expense (date, amount, category) VALUES (?, ?, ?)", [date, amount, category], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED"})
            }
        }
    )
})


//to see expense list
app.get('/expense', (req, res) => {
    con.query('SELECT * FROM expense', (error, results) => {
      if (error) {
        return res.status(500).send({ error });
      }
      res.send(results);
    });
  });


app.listen(3001, () => {
    console.log("running backend server");
})