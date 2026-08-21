import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Clan extends Model{
    declare id: number;
    declare name: "Golden Gate"|"Centurion"|"Estercita"|"Malecon"
    declare type_route_id: string;
    declare tl_id: string;
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
        type_route_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        tl_id: {
            type: DataTypes.UUID,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },{
        sequelize: db
    }
)

export default Clan; 