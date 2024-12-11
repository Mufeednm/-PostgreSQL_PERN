import express from 'express';
import { login } from '../controllers/authcontrollers.js';

const router = express.Router();

// router.post('/register', authController.register);
router.post('/login',login); // Login route

export default router;
