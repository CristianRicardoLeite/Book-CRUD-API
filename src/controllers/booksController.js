import Book from "../models/Book.js";

class BooksController {
    static allBooks = async (req, res) => {
        try {
            const allBooks = await Book.find();
            res.status(200).json(allBooks);
        } catch (error) {
            res.status(500).send('Error retrieving books');
        }
    }

    static bookRegister = async (req, res) => {
        try {
            const newBook = await Book.create(req.body);

            res.status(201).send(`Livro ${newBook} cadastrado com sucesso`);
        } catch (error) {
            console.log(req.body)
            res.status(500).send('Error creating book');
        }
    }

    static async getBookById(req, res) {
        try {
            const livro = await Book.findById(req.params.id);
            res.status(200).json(livro);
        } catch (error) {
            res.status(500).send("Error retrieving book");
        }
    }

    static async updateBook(req, res) {
        try {
            const livroId = req.params.id;
            const updateFields = req.body;

            const livro = await Book.findByIdAndUpdate(livroId, updateFields)
            console.log(updateFields)

            res.status(200).json(`Livro "${livro.title}" alterado com sucesso`);
        } catch (error) {
            res.status(500).send("Error updating book");
        }
    }

    static async deleteBook(req, res) {
        try {
            const livro = await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Livro excluído com sucesso");
        } catch (error) {
            res.status(500).send("Error deleting book");
        }
    }
}
export default BooksController