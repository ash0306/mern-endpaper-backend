const bookModel = require('../models/booksModel');

const addnewBook = async(req,res) => {
    const book = new bookModel({
        id: req.body.id,
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        genre: req.body.genre,
        year: req.body.year
    })

    try{
        const existingBook = await bookModel.findOne({id:req.body.id});
        if(existingBook){
            return res.status(409).json({message:'Book already exists'})
        }
        const newBook = await book.save();
        res.status(201).json(newBook);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = { addnewBook}