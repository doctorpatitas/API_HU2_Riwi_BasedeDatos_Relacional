import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Identification extends Model{
    declare id: number;
    declare type_identification_id: string;
    declare number: string
}

Identification.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        type_identification_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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

export default Identification;