import express from 'express';
import { courseValidator } from '../validators/courses.validator.js';
import { coursesPostcontroller, coursesGetController, coursesGetByIdController, coursesPutController, coursesDeleteController } from '../controllers/courses.controller.js';
import { validatorParamUUID, handleValidationErrors } from '../validators/uuid.validator.js';

const route = express.Router();

// Crear una nueva ruta
route.post('/', courseValidator, handleValidationErrors, coursesPostcontroller.createCourse);

// Obtener todas las rutas disponibles
route.get('/', coursesGetController.getCourse);

// Obtener una ruta por medio de su id
route.get('/:id', validatorParamUUID, handleValidationErrors, coursesGetByIdController.getCoursesById);

// Actualizar una ruta por medio de su id
route.put('/:id', validatorParamUUID, handleValidationErrors, coursesPutController.putCourses);

// Eliminar una ruta por medio de su id
route.delete('/:id', validatorParamUUID, handleValidationErrors, coursesDeleteController.deleteCourses);

export default route;
