import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Courses extends Model{
    declare id: number;
    declare name: 'Node with Nest.js'|'IA'|'Java';
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
            type: DataTypes.ENUM('Node with Nest.js','IA', 'Java'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },{
        sequelize: db,
        timestamps: true,
        paranoid: true
    }
)

export default Courses; 
//esto vendria a ser type-routes, pero solamente le puse courses para que no quedara redundante despues en las rutas
// "routes.routes.ts" se ve bastante feo