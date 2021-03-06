const express = require ('express');
const dotenv = require ('dotenv');
const exphbs = require('express-handlebars');

//Load config from file
dotenv.config({path: './config/config.env'});

//initialize express app
const app = express();
const PORT = process.env.PORT || 3000; //whatever is in the environment variable PORT, or 3000

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


//


// like a translater that the object is a JSON, when the user introduces data, as in the ex. from postman
//app.use(bodyParser.unlencoded({ extended: true}));
//app.use(bodyParser.json());
app.use(express.json());

//import route files
const notes = require('./routes/notes');
const users = require('./routes/users');

//mount routes
app.use('/notes', notes); // I don't know what app.use is, and why this 2 variables ( 1º parametro path, 2º )
app.use('/user', users); 

//setting up what the port should listen to
app.listen(PORT, function() {
  //console.log(process); // para ver todo lo que tiene
  console.log(`Express should be started on http://localhost: ${PORT} in ${process.env.NODE_ENV} mode`)  //why process.? (???????)
});

//why we don't have an export here? (no hace falta porq es la app principal)