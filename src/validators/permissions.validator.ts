import { body, type ValidationChain } from 'express-validator';
import Permissions from '../models/permissions.model.js';

export const permissionValidator: ValidationChain[] = [
    body('permission')
        .isIn(['viewer','admin'])
]