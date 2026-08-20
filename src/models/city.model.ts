import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class City extends Model{
    declare id: number;
    declare name: string;
}
City.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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

export default City;