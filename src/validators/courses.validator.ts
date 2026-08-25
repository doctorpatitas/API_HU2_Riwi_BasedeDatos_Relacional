import { body, type ValidationChain } from 'express-validator';
import Courses from '../models/courses.model.js';

// 
export const courseValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The name should be a text")
        .custom(async (value) => {
            const codeNameCourseExist = await Courses.findOne({where: {name: value}});
            if(codeNameCourseExist){
                throw new Error("This code is already exits")
            }
        })
];
