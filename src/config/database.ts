import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQLDB_DATABASE as string,
  process.env.MYSQLDB_USER as string,
  process.env.MYSQLDB_ROOT_PASSWORD,
  {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    dialect: "mysql"
  }
);

export default sequelize;