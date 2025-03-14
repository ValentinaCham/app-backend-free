import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Space extends Model {
    public id!: number;
    public type!: number;
    public photo!: string;
    public maxCapacity!: number;
    public availability!: boolean;
    public pricePerHour!: number;
}

Space.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        maxCapacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        pricePerHour: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    { sequelize, modelName: "Space", timestamps: false }
);

export default Space;