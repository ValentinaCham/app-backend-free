import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import bcrypt from "bcrypt";

class User extends Model {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public status!: number;

  public async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  {
    sequelize,
    tableName: "users",
    hooks: {
      beforeCreate: async (user: User) => {
        await user.hashPassword();
      },
    },
  }
);

export default User;