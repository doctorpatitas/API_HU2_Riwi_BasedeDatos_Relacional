import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Roles extends Model{
    declare id: number;
    declare roles: 'Coder'|'Tl'|'admin';
    declare permissions_id: string;
}

Roles.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        roles: {
            type: DataTypes.ENUM('Coder','Tl','admin'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        permissions_id: {
            type: DataTypes. UUID,
            allowNull: false
        }
    },{
        sequelize: db,
        timestamps: true,
        paranoid: true
    }
)

export default Roles; // Esto no esta terminado