import sequelize from "../config/database";
import User from "./User";
import Space from "./Space";
import SpaceType from "./SpaceType";

// Relaciones entre modelos
Space.belongsTo(SpaceType, { foreignKey: "type", as: "spaceType" });
SpaceType.hasMany(Space, { foreignKey: "type" });

// Exportar conexión
export { sequelize, User, Space, SpaceType };