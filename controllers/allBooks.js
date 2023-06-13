const bookModel = require('../models/booksModel');

const viewAllBooks = async(req,res) => {
    try{
        const books = await bookModel.find();
        if(!books){
            return res.status(404).json({message: 'No books not found'})
        }
        else{
            return res.status(200).json({books})
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}


module.exports = {viewAllBooks}