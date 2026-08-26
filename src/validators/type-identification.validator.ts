import { body, type ValidationChain } from 'express-validator';

export const typeIdValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The name should be a text"),
    body('code_name')
        .notEmpty().withMessage("The code is required")
        .isString().withMessage("The code_name should be a text")
];