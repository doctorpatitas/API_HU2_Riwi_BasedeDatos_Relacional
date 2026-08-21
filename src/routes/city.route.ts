import express from 'express';
import { cityController } from '../controllers/city.controller.js';

const route = express.Router();

// Crear una nueva ciudad
route.post('/', cityController.createCity);