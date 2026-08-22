import { body, validationResult, type ValidationChain } from 'express-validator'
import { type Request, type Response, type NextFunction } from 'express';

export const cityValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The should be a text"),
    body('code_name')
        .notEmpty().withMessage("The code_name is required")
        .isString().withMessage("The code_name should be a text")
];

export function handleValidationErrors(req: Request, res: Response, next:NextFunction){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    next();
}