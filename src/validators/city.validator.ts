import { body, type ValidationChain } from 'express-validator';

export const cityValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The name should be a text"),
    body('code_name')
        .isIn(['BAQ','MDE']).withMessage("The code name should be BAQ or MDE")
];