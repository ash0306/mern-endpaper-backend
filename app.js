require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3500;
const allBooks = require('./routes/allBooks')
const addBook = require('./routes/newBook')

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('working')
})

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', err =>{
    console.log(err);
})
db.once('open',() =>{
    console.log('Databse Connection established!!');
})

app.use('/view',allBooks);
app.use('/add/new',addBook);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})