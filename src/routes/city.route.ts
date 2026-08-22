import express from 'express';
import { cityPostController } from '../controllers/city.controller.js';
import { cityValidator } from '../validators/city.validator.js';
import { cityGetController } from '../controllers/city.controller.js';

const route = express.Router();

// Crear una nueva ciudad
route.post('/', cityValidator, cityPostController.createCity);

// Obtener todas las ciudades disponibles
route.get('/', cityGetController.getCity);

// Obtener ciudades por su id
route.get('/:id', )