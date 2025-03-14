import UserRepository from "../repositories/UserRepository";

class UserService {
  async register(userData: any) {
    const userExists = await UserRepository.findByEmail(userData.email);
    if (userExists) throw new Error("Email already exists");
    
    return await UserRepository.create(userData);
  }
}

export default new UserService();