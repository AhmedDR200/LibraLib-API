import { Request, Response } from 'express';
import { User } from '../models/user';
import asyncHandler from 'express-async-handler';
import { Like } from 'typeorm';


/**
 * @desc    Create a new user
 * @route   POST /api/users
 * @access  Private (only admin)
 */
export const createUser = asyncHandler(
    async (req: Request, res: Response) => {
        const { name, phone, email, age } = req.body;

        const user = await User.save({
            name: name,
            phone: phone,
            age: age,
            email: email
        });

        res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: user
        });
    }
);



/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Private (only admin)
*/
export const getAllUsers = asyncHandler(
    async (req: Request, res: Response) => {
        const users = await User.find();

        res.status(200).json({
            status: "success",
            results: users.length,
            data: users
        });
    }
);



/**
 * @desc    Get a user by id
 * @route   GET /api/users/:id
 * @access  Private (only admin)
*/
export const getUserById = asyncHandler(
    async (req: Request, res: Response) => {
        const userId:any = req.params.id;

        const user = await User.find({
            where: { id: userId }
        });

        res.status(200).json({
            status: "success",
            data: user
        });
    }
);



/**
 * @desc    Search for a user by name
 * @route   GET /api/users/search
 * @access  Private (only admin)
*/
export const searchForUser = asyncHandler(
    async (req: Request, res: Response) => {
        const {name} = req.query;

        const users = await User.find({
            where: {
                name: Like(`%${name}%`)
            }
        })

        res.status(200).json({
            status: "success",
            result: users.length,
            data: users
        });
    }
);



/**
 * @desc    Delete a user
 * @route   DELETE /api/users/:id
 * @access  Private (only admin)
*/
export const deleteUser = asyncHandler(
    async (req: Request, res: Response) => {
        const userId:any = req.params.id;

        const user = await User.delete(userId);

        res.status(204).json({
            status: "success",
            message: "User deleted successfully",
            data: user
        });
    }
);



/**
 * @desc    Update a user
 * @route   PUT /api/users/:id
 * @access  Private (only admin)
*/
export const updateUser = asyncHandler(
    async (req: Request, res: Response) => {
        const userId:any = req.params.id;
        const {name, phone, email, age} = req.body;

        const user = await User.update(userId, {
            name: name,
            phone: phone,
            email: email,
            age: age
        });

        res.status(200).json({
            status: "success",
            message: "User updated successfully",
            data: user
        });
    }
);