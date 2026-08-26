import express from 'express';
import { typeIdPostController } from '../controllers/type-identification.controller.js';
import { typeIdGetController } from '../controllers/type-identification.controller.js';
import { typeIdGetByIdController } from '../controllers/type-identification.controller.js';
import { typeIdPutController } from '../controllers/type-identification.controller.js';
import { typeIdDeleteController } from '../controllers/type-identification.controller.js';
import { typeIdValidator } from '../validators/type-identification.validator.js';
import { validatorParamUUID } from '../validators/uuid.validator.js';
import { handleValidationErrors } from '../validators/uuid.validator.js';

const route = express.Router();

route.post('/', typeIdValidator, handleValidationErrors, typeIdPostController.createTypeId);
route.get('/', typeIdGetController.getTypeId);
route.get('/:id', validatorParamUUID, handleValidationErrors, typeIdGetByIdController.getTypeIdById);
route.put('/:id', validatorParamUUID, handleValidationErrors, typeIdPutController.putTypeId);
route.delete('/:id', validatorParamUUID, handleValidationErrors, typeIdDeleteController.deleteTypeId);

export default route;