import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    NumeroDePaginas: { type: Number }
});

const Book = mongoose.model('books', bookSchema);

export default Book;
