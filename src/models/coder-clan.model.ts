import { DataTypes, Model } from 'sequelize';
import db from '../config/db.js';

class CoderClan extends Model{
    declare clan_id: string;
    declare coder_id: string;
    declare start_date: string;
    declare end_date: string;
}

CoderClan.init(
    {
        clan_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        coder_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        sequelize: db,
        timestamps: true,
        paranoid: true
    }
)

export default CoderClan;