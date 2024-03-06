import { Request, Response } from 'express';
import { Book } from '../models/book';
import asyncHandler from 'express-async-handler';
import { Like } from 'typeorm';


/**
 * @desc    Create a new book
 * @route   POST /api/books
 * @access  Private (only admin)
*/
export const createBook = asyncHandler(
    async (req: Request, res: Response) => {
        const { title, author, user, genre } = req.body;

        const book = await Book.save({
            title: title,
            author: author,
            genre: genre,
            user: user
        });

        res.status(201).json({
            status: "success",
            message: "Book created successfully",
            data: book
        });
    });


/**
 * @desc    Get all books
 * @route   GET /api/books
 * @access  Public
*/
export const getAllBooks = asyncHandler(
    async (req: Request, res: Response) => {
        const books = await Book.find({
            relations: ["user"],
        });

        res.status(200).json({
            status: "success",
            message: "Books retrieved successfully",
            data: books
        });
    });


/**
 * @desc    Get a single book
 * @route   GET /api/books/:id
 * @access  Public
*/
export const getBook = asyncHandler(
    async (req: Request, res: Response) => {
        const bookId: any = req.params.id;

        const book = await Book.find({
            relations: ["user"],
            where: { id: bookId }
        });

        res.status(200).json({
            status: "success",
            data: book
        });
    });


/**
 * @desc    Search for a book by title
 * @route   GET /api/books/search
 * @access  Private (only admin)
*/
export const searchForBook = asyncHandler(
    async (req: Request, res: Response) => {
        const { title } = req.query;

        const books = await Book.find({
            where: {
                title: Like(`%${title}%`)
            }
        })

        res.status(200).json({
            status: "success",
            result: books.length,
            data: books
        });
    }
);



/**
 * @desc    Delete a book
 * @route   DELETE /api/books/:id
 * @access  Private (only admin)
*/
export const deleteBook = asyncHandler(
    async (req: Request, res: Response) => {
        const bookId: any = req.params.id;

        const book = await Book.delete(bookId);

        res.status(204).json({
            status: "success",
            message: "Book deleted successfully",
            data: book
        });
    }
);



/**
 * @desc    Update a book
 * @route   PUT /api/books/:id
 * @access  Private (only admin)
*/
export const updateBook = asyncHandler(
    async (req: Request, res: Response) => {
        const bookId: any = req.params.id;
        const { title, author, user, genre } = req.body;

        const book = await Book.update(bookId, {
            title: title,
            author: author,
            genre: genre,
            user: user
        });

        res.status(200).json({
            status: "success",
            message: "Book updated successfully",
            data: book
        });
    }
);