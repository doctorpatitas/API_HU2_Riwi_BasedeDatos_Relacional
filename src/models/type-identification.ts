import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class TypeIdentification extends Model{
    declare id: string;
    declare name: string;
    declare code: string;
}

TypeIdentification.init(
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
        code: {
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

export default TypeIdentification;