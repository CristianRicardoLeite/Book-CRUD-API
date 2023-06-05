import express from "express";
import BooksController from "../controllers/booksController.js"

const router = express.Router();

router.get("/livros", BooksController.allBooks)
    .post("/livros", BooksController.bookRegister)
    .get("/livros/:id", BooksController.getBookById)
    .put("/livros/:id", BooksController.updateBook)
    .delete("/livros/:id", BooksController.deleteBook);

export default router;