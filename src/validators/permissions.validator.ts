import { body, type ValidationChain } from 'express-validator';
import Permissions from '../models/permissions.model.js';

export const permissionValidator: ValidationChain[] = [
    body('permission')
        .isIn(['viewer','admin']).withMessage("The permissions should be viewer or admin")
]