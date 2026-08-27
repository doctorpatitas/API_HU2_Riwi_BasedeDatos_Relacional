import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class TypeIdentification extends Model{
    declare id: string;
    declare name: string;
    declare code_name: 'TI'|'CC'|'CE'|'PP'|'PPT'|'PEP';
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
        code_name: {
            type: DataTypes.ENUM('TI','CC','CE','PP','PPT','PEP'),
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

export default TypeIdentification;