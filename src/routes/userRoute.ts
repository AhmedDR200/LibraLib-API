import express from "express";
import { createUser,
         getAllUsers,
         getUserById,
         searchForUser,
         deleteUser,
         updateUser } from "../controllers/userController"
import { createUserValidator } from "../validations/userValidators";
const router = express.Router();


router.post('/', createUserValidator, createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/search', searchForUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);




export { router as userRouter}