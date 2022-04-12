const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");
const { route } = require("express/lib/application");

const host = "127.0.0.1"; 
const port = 3000;

app.use(session({secret: "segredo123"}));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static("public"));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {
    res.sendFile(path.join("home.html"));
});

app.listen(process.env.port || port, () => {
    console.log(`servidor rodando em https://localhost:${port}\n`);
});