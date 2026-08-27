import { body, type ValidationChain } from 'express-validator';

export const typeIdValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The name should be a text"),
    body('code_name')
        .isIn(['TI','CC','CE','PP','PPT','PEP']).withMessage("The type identification should be TI, CC, CE, PP, PPT or PEP")
];