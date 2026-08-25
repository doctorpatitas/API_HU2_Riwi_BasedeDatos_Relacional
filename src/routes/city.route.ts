import express from 'express';
import { cityPostController } from '../controllers/city.controller.js';
import { cityValidator } from '../validators/city.validator.js';
import { cityGetController } from '../controllers/city.controller.js';
import { cityGetByIdController } from '../controllers/city.controller.js';
import { cityPutController } from '../controllers/city.controller.js';
import { cityDeleteController } from '../controllers/city.controller.js';
import { handleValidationErrors } from '../validators/uuid.validator.js';
import { validatorParamUUID } from '../validators/uuid.validator.js';

const route = express.Router();

// Crear una nueva ciudad
route.post('/', cityValidator, handleValidationErrors, cityPostController.createCity);

// Obtener todas las ciudades disponibles
route.get('/', cityGetController.getCity);

// Obtener una ciudad por medio de su id
route.get('/:id', validatorParamUUID, handleValidationErrors, cityGetByIdController.getCityById);

// Actualizar una ciudad por medio de su id
route.put('/:id', validatorParamUUID, handleValidationErrors, cityPutController.putCity);

// Eliminar una ciudad por medio de su id
route.delete('/:id', validatorParamUUID, handleValidationErrors, cityDeleteController.deleteCity);

export default route;
