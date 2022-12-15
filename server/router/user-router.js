// router.get("/register", async(req, res, next)=> {
//     const id = req.body.id;
//     const email = req.body.email;
//     const password = req.body.password;
//     const phoneNum = req.body.phoneNum;
//     const role = req.body.role;

//     const newUser = await userServie.addUser({
//         id, email, password, phoneNum, role
//     })

//     res.status(201).json(newUser);
// })

// export {router};
import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as authController from '../contoller/auth.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be not empty'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('password should be at least 5 characters'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').trim().notEmpty().withMessage('name is missing'),
  body('email').trim().normalizeEmail().isEmail().withMessage('invalid email'),
  body('url')
    .isURL()
    .withMessage('invalid URL')
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

// signup
router.post('/signup', validateSignup, authController.signup);
// login
router.post('/login', validateCredential, authController.login);
// me
router.get('/me', isAuth, authController.me);

export default router;