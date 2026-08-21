import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Room extends Model{
    declare id: string;
    declare name: string;
    declare capacity: number;
    declare campus_id: string;
}

Room.init(
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
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        campus_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },{
        sequelize: db
    }
)