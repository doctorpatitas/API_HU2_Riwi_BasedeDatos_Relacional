import { body, type ValidationChain } from 'express-validator';

export const permissionValidator: ValidationChain[] = [
    body('permission')
        .isIn(['viewer','admin']).withMessage("The permissions should be viewer or admin")
];