import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Clan extends Model{
    declare id: number;
    declare name: "Golden Gate"|"Centurion"|"Estercita"|"Malecon"
    declare course_id: string;
    declare tl_id: string;
    declare room_id: string;
    declare schelude_id: string;
}

Clan.init(
    {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.ENUM("Golden Gate","Centurion","Estercita","Malecon"),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        course_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        tl_id: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true
        },
        room_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        schelude_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },{
        sequelize: db
    }
)

export default Clan; 