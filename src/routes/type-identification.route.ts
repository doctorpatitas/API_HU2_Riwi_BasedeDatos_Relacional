import express from 'express';
import { typeIdValidator } from '../validators/type-identification.validator.js';
import { typeIdPostController, typeIdGetController, typeIdGetByIdController, typeIdPutController, typeIdDeleteController } from '../controllers/type-identification.controller.js';
import { validatorParamUUID, handleValidationErrors } from '../validators/uuid.validator.js';

const route = express.Router();

route.post('/', typeIdValidator, handleValidationErrors, typeIdPostController.createTypeId);
route.get('/', typeIdGetController.getTypeId);
route.get('/:id', validatorParamUUID, handleValidationErrors, typeIdGetByIdController.getTypeIdById);
route.put('/:id', validatorParamUUID, handleValidationErrors, typeIdPutController.putTypeId);
route.delete('/:id', validatorParamUUID, handleValidationErrors, typeIdDeleteController.deleteTypeId);

export default route;