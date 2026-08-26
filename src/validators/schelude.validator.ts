import { body, type ValidationChain } from 'express-validator';

export const scheludeValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The name should be a text"),
    body('start_time')
        .notEmpty().withMessage("The start_time is required")
        .isTime({hourFormat: 'hour24', mode: 'default'}).withMessage("Must be a valid time in HH:MM format (24 hours)"),
    body('end_time')
        .notEmpty().withMessage("The name is required")
        .isTime({hourFormat: 'hour24', mode: 'default'}).withMessage("Must be a valid time in HH:MM format (24 hours)")
];