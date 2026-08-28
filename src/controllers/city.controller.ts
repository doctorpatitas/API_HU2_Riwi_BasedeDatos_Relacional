import { type Request, type Response } from 'express';
import City from '../models/city.model.js';

// Post
// Crear una nueva ciudad
export const cityPostController = { createCity: async(req: Request, res: Response) => {
    try {
        const {name, code_name} = req.body;

        const cityCreate = await City.create({
            name,
            code_name
        });

        res.status(201).json({message: "The city has been successfully created", cityCreate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Get
// Entrega un array de todas las ciudades disponibles
export const cityGetController = { getCity: async(req: Request, res: Response) => {
    try {
        const cityArray = await City.findAll()

        res.status(200).json({message: "The cities have been successfully found", cityArray});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Get by id
// Entrega un objeto de la ciudad buscada por id
export const cityGetByIdController = { getCityById: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const city = await City.findByPk(id);

        if(!city){
            return res.status(404).json({message: "City not found"})
        }

        res.status(200).json({message: "City found successfully", city})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Put
// Actualiza una ciudad buscada por su id
export const cityPutController = { putCity: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        
        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const {name, code_name} = req.body;

        const updatedCity = await City.findByPk(id);

        if(!updatedCity){
            return res.status(404).json({message: "City not found"});
        }

        await updatedCity.update({name, code_name});

        res.status(200).json({message: "City updated successfully", updatedCity})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Delete
// Elimina una ciudad buscada por su id
export const cityDeleteController = { deleteCity: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const deletedCity = await City.findByPk(id);

        if(!deletedCity){
            return res.status(404).json({message: "City not found"});
        }

        await deletedCity.destroy();

        res.status(200).json({message: "City deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

