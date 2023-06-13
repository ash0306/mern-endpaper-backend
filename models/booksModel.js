const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required: true,
            unique: true
        },
        bookName : {
            type: String,
            required: true
        },
        authorName : {
            type: String,
            required: true
        },
        genre : {
            type: String,
            default:'Unknown'
        },
        year : {
            type: String,
            default: 2023
        }
    },
    {
        collection: 'book-details',
    }
)

module.exports =  mongoose.model('book-details', bookSchema);