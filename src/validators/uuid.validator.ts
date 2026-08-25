import { param, body, validationResult, type ValidationChain } from 'express-validator';
import { type Request, type Response, type NextFunction } from 'express';

// Valida el UUID que va en la URL (busca x cosa por su id)
export const validatorParamUUID: ValidationChain[] = [
    param('id')
        .isUUID().withMessage("The ID field must be a UUID")
]

// Valida el UUID que va en el body 
export function validatorBodyUUID(fieldName: string): ValidationChain {
    return body(fieldName).isUUID().withMessage(`The ${fieldName} must be a UUID`);
}

// Funciona que valida que no hayan errores
export function handleValidationErrors(req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    next();
}
