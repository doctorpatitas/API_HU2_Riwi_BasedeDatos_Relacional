import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Roles extends Model{
    declare id: number;
    declare roles: 'Coder'|'Tl';
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
            type: DataTypes.ENUM('Coder','Tl'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },{
        sequelize: db
    }
)

export default Roles;