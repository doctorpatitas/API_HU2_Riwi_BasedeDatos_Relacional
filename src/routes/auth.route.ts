import express from 'express';
import { authController } from '../controllers/auth.controller.js';
import { verifyToken, isAdmin } from '../validators/auth.validator.js';

const route = express.Router();

route.post('/login', authController.login);
route.post('/register', verifyToken, isAdmin, authController.register);

export default route;