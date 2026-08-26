import express from 'express';
import { scheludePostController } from '../controllers/schelude.controller.js';
import { scheludeGetController } from '../controllers/schelude.controller.js';
import { scheludeGetByIdController } from '../controllers/schelude.controller.js';
import { scheludePutController } from '../controllers/schelude.controller.js';
import { scheludeDeleteController } from '../controllers/schelude.controller.js';
import { scheludeValidator } from '../validators/schelude.validator.js';
import { handleValidationErrors } from '../validators/uuid.validator.js';
import { validatorParamUUID } from '../validators/uuid.validator.js';

const route = express.Router();

// Crea un nuevo cronograma
route.post('/', scheludeValidator, handleValidationErrors, scheludePostController.createSchelude);

// Obtener todos los cronogramas disponibles
route.get('/', scheludeGetController.getSchelude);

// Obtener un cronograma por medio de su id
route.get('/:id', validatorParamUUID, handleValidationErrors, scheludeGetByIdController.getScheludeById);

// Actualizar un permiso por medio de su id
route.put('/:id', validatorParamUUID, handleValidationErrors, scheludePutController.updateSchelude);

// Eliminar un permiso por medio de su id
route.delete('/:id', validatorParamUUID, handleValidationErrors, scheludeDeleteController.deleteSchelude);

export default route;