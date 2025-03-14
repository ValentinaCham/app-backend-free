import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Reservation extends Model {
    public id!: number;
    public idUser!: number;
    public idSpace!: number;
    public canceled!: boolean;
    public cliCancel?: boolean | null;
    public reasonCancel?: string | null;
    public date!: Date;
}

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idSpace: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        canceled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        cliCancel: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        reasonCancel: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    { sequelize, modelName: "Reservation" }
);

export default Reservation;
