const express = require ("express")
const connection = require ("./Express/config/connection")
const router = require ("./Express/router/router")
require ("dotenv").config();
const cors = require ("cors")

const app = express();

app.use(express.json());
app.use (
    cors ({
        origin : "http://localhost:3000",
        methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
    })
)


let port =4000;

connection();


app.use(router);

// app.use("/",(req, res)=>res.send("I'M  Alive")); 

app.listen(port,()=>{
    console.log("server is running on: ",port);
})
