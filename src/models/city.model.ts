import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class City extends Model{
    declare id: number;
    declare name: string;
    declare code_name: string;
}

City.init(
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
        code_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        }
    },{
        sequelize: db,
        paranoid: true
    }
)

export default City;