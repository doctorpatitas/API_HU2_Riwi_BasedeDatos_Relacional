import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Courses extends Model{
    declare id: number;
    declare name: string;
}

Courses.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },{
        sequelize: db
    }
)

export default Courses; 
//esto vendria a ser type-routes, pero solamente le puse courses para que no quedara redundante despues en las rutas
// "routes.routes.ts" se ve bastante feo