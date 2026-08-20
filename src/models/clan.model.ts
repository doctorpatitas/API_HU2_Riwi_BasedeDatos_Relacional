import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class Clan extends Model{
    declare id: number;
    declare name: "Golden Gate"|"Centurion"|"Estercita"|"Malecon"
}

Clan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.ENUM("Golden Gate","Centurion","Estercita","Malecon"),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    },{
        sequelize: db
    }
)

export default Clan; 