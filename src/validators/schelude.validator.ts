import { body, type ValidationChain } from 'express-validator';

export const scheludeValidator: ValidationChain[] = [
    body('shift')
        .isIn(['AM','PM']).withMessage("The shift should be AM or PM"),
    body('start_time')
        .notEmpty().withMessage("The start_time is required")
        .isTime({hourFormat: 'hour24', mode: 'withSeconds'}).withMessage("Must be a valid time in HH:MM format (24 hours)"),
    body('end_time')
        .notEmpty().withMessage("The end_time is required")
        .isTime({hourFormat: 'hour24', mode: 'withSeconds'}).withMessage("Must be a valid time in HH:MM format (24 hours)")
];