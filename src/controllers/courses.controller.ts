import { type Request, type Response } from 'express';
import Courses from '../models/courses.model.js';

// Post
// Crear una nueva ruta
export const coursesPostcontroller = { createCourse: async(req: Request, res: Response) => {
    try {
        const {name} = req.body;

        const courseCreate = await Courses.create({
            name
        });

        res.status(201).json({message: "The course has been succesfully created", courseCreate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}

// Get
// Entrega un array de todas las rutas disponibles
export const coursesGetController = { getCourse: async(req: Request, res: Response) => {
    try {
        const coursesArray = await Courses.findAll();

        res.status(200).json({message: "The courses has been succesfully found", coursesArray});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}

// Get by id
// Entrega un objeto de la ruta buscada por su id
export const coursesGetByIdController = { getCoursesById: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const course = await Courses.findByPk(id);

        if(!course){
            return res.status(404).json({message: "Course not found"});
        }

        res.status(200).json({message: "The course has been succesfully found", course});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}

// Put
// Actualiza una ruta buscada por su id
export const coursesPutController = { putCourses: async(req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const {name} = req.body;

        const updatedCourse = await Courses.findByPk(id);

        if(!updatedCourse){
            return res.status(404).json({message: "Course not found"});
        }

        await updatedCourse.update({
            name
        })

        res.status(200).json({message: "Course updated successfully", updatedCourse});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}

// Delete
// Elimina una ruta buscada por su id
export const coursesDeleteController = { deleteCourses: async(req: Request, res:Response) => {
    try {
        const {id} = req.params;

        if(!id || typeof id !== 'string'){
            return res.status(400).json({message: "Invalid id"});
        }

        const deletedCourse = await Courses.findByPk(id);

        if(!deletedCourse){
            return res.status(404).json({message: "Course not found"});
        }

        await deletedCourse.destroy();

        res.status(200).json({message: "Course deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "An unexpected server error has ocurred"});
    }
}}