import express from 'express';
import { scheludeValidator } from '../validators/schelude.validator.js';
import { scheludePostController, scheludeGetController, scheludeGetByIdController, scheludePutController, scheludeDeleteController } from '../controllers/schelude.controller.js';
import { validatorParamUUID, handleValidationErrors } from '../validators/uuid.validator.js';

const route = express.Router();

// Crea un nuevo cronograma
route.post('/', scheludeValidator, handleValidationErrors, scheludePostController.createSchelude);

// Obtener todos los cronogramas disponibles
route.get('/', scheludeGetController.getSchelude);

// Obtener un cronograma por medio de su id
route.get('/:id', validatorParamUUID, handleValidationErrors, scheludeGetByIdController.getScheludeById);

// Actualizar un cronograma por medio de su id
route.put('/:id', validatorParamUUID, handleValidationErrors, scheludePutController.updateSchelude);

// Eliminar un cronograma por medio de su id
route.delete('/:id', validatorParamUUID, handleValidationErrors, scheludeDeleteController.deleteSchelude);

export default route;