const express = require ('express');
const dotenv = require ('dotenv');

//Load config from file
dotenv.config({path: './config/config.env'});

//initialize express app
const app = express();
const PORT = process.env.PORT || 3000; //whatever is in the environment variable PORT, or 3000

//import route files
const notes = require('./routes/index');
const users = require('./routes/users');

//mount routes
app.use('/notes', notes); // I don't know what app.use is, and why this 2 variables ( 1º parametro path, 2º )
app.use('/user', users); 

//setting up what the port should listen to
app.listen(PORT, function() {
  //console.log(process); // para ver todo lo que tiene
  console.log(`Express started on http://localhost: ${PORT} in ${process.env.NODE_ENV} mode`)  //why process.? (???????)
});

//why we don't have an export here? (no hace falta porq es la app principal)