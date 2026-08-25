import { type Request, type Response } from 'express';
import Permissions from '../models/permissions.model.js';

// Post 
// Crear un permiso nuevo (Esto nunca lo usare, es solamente para practicar)
export const permissionsPostController = { createPermissions: async(req: Request, res: Response) => {
    try {
        const {permissions} = req.body;

        const permissionsCreate = await Permissions.create({
            permissions
        })

        res.status(201).json({message: "The permission has been successfully created", permissionsCreate})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred "})
    }
}}

// Get
// Entrega un array de todos los permisos
export const permissionsGetController = { getPermissions: async(req: Request, res: Response) => {
    try {
        const permissionsArray = await Permissions.findAll();

        res.status(200).json({message: "The permissions has been successfully found", permissionsArray});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred "})
    }
}}

// Get by id
// Entrega un objeto de los permisos buscado por su id
export const permissionsGetByIdController = { getPermissionsById: async(req: Request, res: Response) => {
        try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const permission = await Permissions.findByPk(id);

        if(!permission){
            return res.status(404).json({message: "Permission not found"});
        }
        
        res.status(200).json({message: "The permissions has been successfully found", permission});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred "})
    }
}}

// Put
// Actualiza un permiso buscado por su id
export const permissionsPutController = { updatePermissions: async(req: Request, res: Response) => {
        try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const {permission} = req.body;

        const updatedPermission = await Permissions.findByPk(id);

        if(!updatedPermission){
            return res.status(404).json({message: "Permission not found"});
        }

        await updatedPermission.update({
            permission
        })

        res.status(200).json({message: "Permission updated successfully", updatedPermission});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred "})
    }
}}

// Delete
// Elimina un permiso buscado por su id
export const permissionsDeleteController = { deletePermissions: async(req: Request, res: Response) => {
        try {
        const {id} = req.body;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const deletedPermissions = await Permissions.findByPk(id);

        if(!deletedPermissions){
            return res.status(404).json({message: "Permission not found"});
        }

        await deletedPermissions.destroy();

        res.status(200).json({message: "Permission deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred "})
    }
}}