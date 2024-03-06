import express from "express";
import { createBook, getAllBooks, getBook, searchForBook, deleteBook, updateBook } from "../controllers/bookController";

const router = express.Router();

router.route("/")
.post(createBook)
.get(getAllBooks);

router.route("/:id")
.get(getBook)
.delete(deleteBook)
.put(updateBook);

router.post("/search", searchForBook)


export { router as bookRouter}