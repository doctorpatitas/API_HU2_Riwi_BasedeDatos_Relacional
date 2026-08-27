import express from 'express';
import { permissionValidator } from '../validators/permissions.validator.js';
import { permissionsPostController, permissionsGetController, permissionsGetByIdController, permissionsPutController, permissionsDeleteController } from '../controllers/permissions.controller.js';
import { validatorParamUUID, handleValidationErrors } from '../validators/uuid.validator.js';

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

export default route;