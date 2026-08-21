import { type Request, type Response } from 'express';
import City from '../models/city.model.js';

export const cityController = { createCity: async(req: Request, res: Response) => {

    try {
        const { name, code_name } = req.body;

        const cityCreate = await City.create({
            name,
            code_name
        });

        res.status(201).json({message: "The city has been successfully created", cityCreate})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }

}}