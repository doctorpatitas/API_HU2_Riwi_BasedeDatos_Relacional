import { type Request, type Response } from 'express';
import Schelude from '../models/schelude.model.js';

// Post
export const scheludePostController = { createSchelude: async(req: Request, res: Response) => {
    try {
        const {shift, start_time, end_time} = req.body;

        const scheludeCreate = await Schelude.create({
            shift, start_time, end_time
        });

        res.status(201).json({message: "The schedule has been successfully created", scheludeCreate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Get
export const scheludeGetController = { getSchelude: async(req: Request, res: Response) => {
    try {
        const scheludeArray = await Schelude.findAll();

        res.status(200).json({message: "The schedules have been successfully found", scheludeArray});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Get by id
export const scheludeGetByIdController = { getScheludeById: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const schelude = await Schelude.findByPk(id);

        res.status(200).json({message: "Schedule found successfully", schelude});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Put
export const scheludePutController = { updateSchelude: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const {shift, start_time, end_time} = req.body;

        const updatedSchelude = await Schelude.findByPk(id);

        if(!updatedSchelude){
            return res.status(404).json({message: "Schedule not found"});
        }

        await updatedSchelude.update({shift, start_time, end_time});

        res.status(200).json({message: "Schedule updated successfully", updatedSchelude});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

// Delete
export const scheludeDeleteController = { deleteSchelude: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const deletedSchelude = await Schelude.findByPk(id);

        if(!deletedSchelude){
            return res.status(404).json({message: "Schedule not found"});
        }

        await deletedSchelude.destroy();

        res.status(200).json({message: "Schedule deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}