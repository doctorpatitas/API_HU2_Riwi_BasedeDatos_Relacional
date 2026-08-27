import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import db from '../config/db.js';

export const authController = { register: async(req: Request, res: Response) => {
    const transaction = await db.transaction();

    try {
        const {first_name, last_name, email, password, phone, birth_date, city_id, address, type_identification_id, number} = req.body;

        // Logica del auth
        const hashedPassword = await bcrypt.hash(password, 10);

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        res.status(500).json({message: "An unexpected error has occurred"});
    }
}}