const express = require ('express');
const dotenv = require ('dotenv'); //what is this
const exphbs = require('express-handlebars');
const morgan = require ('morgan'); //why do I need this
const connectionToDb = require ('./config/databaseconfig');
const sessions = require ('express-session');
const mongoose = require ('mongoose');
const connectMongo = require ('connect-mongo'); //used to connect the express session with the ddbb but we have mongoose client already

//Load config from file
dotenv.config({path: './config/config.env'});

//invoke the fx
connectionToDb();


//initialize express app
const app = express();
const PORT = process.env.PORT || 3000; //whatever is in the environment variable PORT, or 3000
const storing = connectMongo.create({ mongoUrl: process.env.LOCAL_MONGODB_URL, collection: 'session' }) //take the value of the variable of the process that is running right now
app.use(sessions({ //this was just copy pasted from the documentation 
  secret: process.env.secretEnv, //since we're calling a local env
  resave: false,
  saveUninitialized: true,
  store: storing, //this means that we're to store the session information of the user in the ddbb
  cookie: { maxAge: 1000*60*60*24 } //setting the cookie expiration to 1 day
}))

//{ path: '/', httpOnly: true, secure: false, maxAge: null }.
//configure express-handlebars as our view engine //initiallizing the app:
app.engine('hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));

app.set('view engine', 'hbs');

// like a translater that the object is a JSON, when the user introduces data, as in the ex. from postman

app.use(express.json());
//app.use(logger);
if (process.env.NODE_ENV==='development') {
  app.use(morgan('dev'))
}


//import and define routers
const notes = require('./routes/notes');
const users = require('./routes/users');
const routeViews = require('./routes/views');
const userAccess =  require('./routes/auth'); //will handle register, log in , log out
//const logger = require('./middleware/logger')


//mounted routes
app.use('/notes', notes); // I don't know what app.use is, and why this 2 variables ( 1º parametro path, 2º )
app.use('/user', users); 
app.use('/view', routeViews);
app.use('/', userAccess);

//setting up what the port should listen to
app.listen(PORT, function() {
  //console.log(process); // para ver todo lo que tiene
  console.log(`Express should be started on http://localhost: ${PORT} in ${process.env.NODE_ENV} mode`)  //why process.? (???????)
});

//why we don't have an export here? (no hace falta porq es la app principal)