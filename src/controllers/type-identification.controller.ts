import { type Request, type Response } from 'express';
import TypeIdentification from '../models/type-identification.model.js';

export const typeIdPostController = { createTypeId: async(req: Request, res: Response) => {
    try {
        const {name, code_name} = req.body;

        const typeIdCreate = await TypeIdentification.create({
            name, code_name
        });

        res.status(201).json({message: "The type identification has been successfully created", typeIdCreate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

export const typeIdGetController = { getTypeId: async(req: Request, res: Response) => {
    try {
        const typeIdArray = await TypeIdentification.findAll();

        res.status(200).json({message: "The type identifications have been successfully found", typeIdArray});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

export const typeIdGetByIdController = { getTypeIdById: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const typeId = await TypeIdentification.findByPk(id);

        if(!typeId){
            return res.status(404).json({message: "Type identification not found"});
        }

        res.status(200).json({message: "Type identification found successfully", typeId});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has occurred"});
    }
}}

export const typeIdPutController = { putTypeId: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const {name, code_name} = req.body;

        const updatedTypeId = await TypeIdentification.findByPk(id);

        if(!updatedTypeId){
            return res.status(404).json({message: "Type identification not found"});
        }

        await updatedTypeId.update({name, code_name});

        res.status(200).json({message: "Type identification updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}

export const typeIdDeleteController = { deleteTypeId: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const deletedTypeId = await TypeIdentification.findByPk(id);

        if(!deletedTypeId){
            return res.status(404).json({message: "Type identification not found"});
        }

        await deletedTypeId.destroy();

        res.status(200).json({message: "Type identification deleted successfully5"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}