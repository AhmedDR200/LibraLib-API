import { check, body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/handleValidationErrors';


export const createUserValidator = [
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),

 body('phone')
    .notEmpty()
    .withMessage('Phone number is required'),
 
 body('name')
    .isLength({ min: 3, max: 255})
    .withMessage('Name must be at least 3 characters long'),

 body('age')
    .isInt({ min: 18, max: 100})
    .withMessage('Age must be at least 18 years old'),

 handleValidationErrors   
];