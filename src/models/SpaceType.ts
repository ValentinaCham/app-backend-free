import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class SpaceType extends Model {
    public id!: number;
    public description!: string;
}

SpaceType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // Mantiene como clave primaria
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: "SpaceType", timestamps: false }
);

export default SpaceType;