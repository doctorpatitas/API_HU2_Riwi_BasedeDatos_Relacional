import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Schelude extends Model{
    declare id: string;
    declare shift: 'AM'|'PM';
    declare start_time: string;
    declare end_time: string;
}

Schelude.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        shift: {
            type: DataTypes.ENUM('AM', 'PM'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        end_time: {
            type: DataTypes.TIME,
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

export default Schelude;