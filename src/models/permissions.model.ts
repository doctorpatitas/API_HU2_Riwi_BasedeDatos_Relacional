import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Permissions extends Model{
    declare id: string;
    declare permission: 'viewer'|'admin'
}

Permissions.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        permission: {
            type: DataTypes.ENUM('viewer','admin'),
            defaultValue: 'viewer',
            unique: true
        }
    },{
        sequelize: db,
        paranoid: true
    }
)

export default Permissions;