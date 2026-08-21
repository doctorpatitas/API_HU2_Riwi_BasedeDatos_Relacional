import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class User extends Model{
    declare id: string;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare password: string;
    declare phone: string;
    declare birth_date: string;
    declare is_active: boolean;
    declare role_id: string;
    declare identification_id: string;
    declare address_user_id: string;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        role_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        identification_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        address_user_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },{
        sequelize: db
    }
)

export default User;