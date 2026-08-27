import express from 'express';
import { cityValidator } from '../validators/city.validator.js';
import { cityPostController, cityGetController, cityGetByIdController, cityPutController, cityDeleteController } from '../controllers/city.controller.js';
import { validatorParamUUID, handleValidationErrors } from '../validators/uuid.validator.js';

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
