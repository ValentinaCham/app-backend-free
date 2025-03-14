import User from "../models/User";

class UserRepository {
  async create(userData: Partial<User>): Promise<User> {
    return await User.create(userData);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }
}

export default new UserRepository();