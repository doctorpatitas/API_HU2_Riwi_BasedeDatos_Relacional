import { type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import 'dotenv/config';
import db from '../config/db.js';
import User from '../models/user.model.js';
import Address from '../models/address-user.model.js';
import Identification from '../models/identification.model.js';
import Roles from '../models/roles.model.js';

export const authController = { register: async(req: Request, res: Response) => {
    const transaction = await db.transaction();

    try {
        const {roles, permissions_id, city_id, address, type_identification_id, number, first_name, last_name, email, password, phone, birth_date,} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userRole = await Roles.create(
            {roles, permissions_id},
            {transaction}
        );

        const userAddress = await Address.create(
            {city_id, address},
            {transaction}
        );

        const userIdentification = await Identification.create(
            {type_identification_id, number},
            {transaction}
        );

        const newUser = await User.create(
            {
                first_name, last_name, email, password, phone, birth_date,
                role_id: userRole.id,
                address_user_id: userAddress.id,
                identifcation_id: userIdentification.id
            }
        );

        await transaction.commit();

        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        res.status(500).json({message: "An unexpected error has occurred"});
    }
},
    login: async(req: Request, res: Response) => {
        try {
            const {email, password} = req.body;

            const userLogin = await User.findOne({where: {email}});

            if(!userLogin){
                return res.status(401).json({message: "Invalid credentials"});
            }

            const comparePassword = await bcrypt.compare(password, userLogin.password)

            if(comparePassword){
                return res.status(401).json({message: "Invalid credentials"})
            }
            const secretKey = process.env.JWT_SECRET; 

            if(!secretKey){
                return res.status(401).json({message: "Access denied"});
            }

            const generateNewToken = jwt.sign(userLogin, secretKey, {expiresIn: '24h'});

            if(!generateNewToken){
                return res.status(401).json({message: "Acces denied"});
            }
            
            res.status(200).json({message: "Successfully login"})
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "An unexpected server error has occurred" });
        }
    }
}