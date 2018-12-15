const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);


app.get("/",(req, res) => {
	res.render("landing");
});

app.get("/gesichtspflege",(req, res) => {
	res.render("gesichtspflege");
});

app.get("/hand_und_fusspflege",(req, res) => {
	res.render("hand_und_fusspflege");
});

app.get("/uber_mich",(req, res) => {
	res.render("uber_mich");
});

app.get("/termin",(req, res) => {
	res.render("termin");
});


app.use(express.static("public"));

app.listen(port);
