import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Campus extends Model{
    declare id: string;
    declare name: string;
    declare city_id: string;
    declare address: string;
}

Campus.init(
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
        city_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
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

export default Campus;