require("dotenv");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const path = require("path");
const connection = require("./config/connection");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars config
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

// Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
 

app.use(apiRoutes, htmlRoutes);
require("./survey/matchinglogic")(app);
var db = require('./config/index');

async function getUser() {
    const users = await db.findUsers();
    var string = JSON.stringify(users);
    var userData = JSON.parse(string);
    console.log(userData);
    app.get("/api/friends", function(req,res){
      res.send(userData);
    })
}



getUser();


// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

//

//

//module.exports = app;
