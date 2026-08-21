import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Address extends Model{
    declare id: string;
    declare city_id: string;
    declare address: string;
}

Address.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
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

export default Address;