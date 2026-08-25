import express from 'express';
import { permissionsPostController } from '../controllers/permissions.controller.js';
import { permissionsGetController } from '../controllers/permissions.controller.js';
import { permissionsGetByIdController } from '../controllers/permissions.controller.js';
import { permissionsPutController } from '../controllers/permissions.controller.js';
import { permissionsDeleteController } from '../controllers/permissions.controller.js';
import { handleValidationErrors } from '../validators/uuid.validator.js';
import { permissionValidator } from '../validators/permissions.validator.js';
import { validatorParamUUID } from '../validators/uuid.validator.js';

const route = express.Router();

// Crear un nuevo permiso
route.post('/', permissionValidator, handleValidationErrors, permissionsPostController.createPermissions);

// Obtener todos los permisos disponibles
route.get('/', permissionsGetController.getPermissions);

// Obtener un permiso por medio de su id
route.get('/:id', validatorParamUUID, handleValidationErrors, permissionsGetByIdController.getPermissionsById);

// Actualizar un permiso por medio de su id
route.put('/:id', validatorParamUUID, handleValidationErrors, permissionsPutController.updatePermissions);

// Eliminar un permiso por medio de su id
route.delete('/:id', validatorParamUUID, handleValidationErrors, permissionsDeleteController.deletePermissions);

export default route