import { body, type ValidationChain } from 'express-validator';
import City from '../models/city.model.js';


export const cityValidator: ValidationChain[] = [
    body('name')
        .notEmpty().withMessage("The name is required")
        .isString().withMessage("The name should be a text"),
    body('code_name')
        .notEmpty().withMessage("The code_name is required")
        .isString().withMessage("The code_name should be a text")
        .custom(async (value) => {
            const codeNameCityExist = await City.findOne({where: {code_name: value}});
            if(codeNameCityExist){
                throw new Error("This code is already exits")
            }
        })
];
