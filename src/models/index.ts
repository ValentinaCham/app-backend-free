import sequelize from "../config/database";
import User from "./User";
import Space from "./Space";
import SpaceType from "./SpaceType";
import Reservation from "./Reservation";

// Relaciones entre modelos
Space.belongsTo(SpaceType, { foreignKey: "type", as: "spaceType" });
SpaceType.hasMany(Space, { foreignKey: "type" });

User.hasMany(Reservation, { foreignKey: "idUser", as: "reservations" });
Reservation.belongsTo(User, { foreignKey: "idUser", as: "user" });

Space.hasMany(Reservation, { foreignKey: "idSpace", as: "reservations" });
Reservation.belongsTo(Space, { foreignKey: "idSpace", as: "space" });

// Exportar conexión
export { sequelize, User, Space, SpaceType };