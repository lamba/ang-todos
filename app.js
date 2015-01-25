var 
  express,
	http,
	loginErrorMessage,
	cookieParser,
	session,
  port,
	app,
	todosVersion = "v0.2.0",
	sid,

	//functions
	sendEmail;

//link required node.js modules  
express = require("express");	
http = require("http");
cookieParser = require("cookie-parser");
session = require("express-session");

port = 800;
app = express();

app.use(express.static(__dirname + "/"));
app.use(cookieParser());
app.use(session({
	secret:'topsecret',
	saveUninitialized:true,
	resave:true
}));

http.createServer(app).listen(process.env.PORT || port);
console.log("App " + todosVersion + " is listening on port " + (process.env.PORT || port));