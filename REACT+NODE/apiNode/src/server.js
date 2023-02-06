

const express = require('express')
require('dotenv').config()
const cors = require('cors')


const dbController = require('./dbconfigpg')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors());

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.get('/movies',dbController.getMovies);
app.post('/addMovie', dbController.addMovie);

app.listen(PORT, () =>{
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
})