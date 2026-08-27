import { body, type ValidationChain } from 'express-validator';

export const courseValidator: ValidationChain[] = [
    body('name')
        .isIn(['Node with Nest.js','IA', 'Java']).withMessage("The course should be Node with Nest.js, IA or Java")
];
