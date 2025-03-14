import UserRepository from "../repositories/UserRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserService {
  
  async register(userData: any) {
    const userExists = await UserRepository.findByEmail(userData.email);
    if (userExists) throw new Error("Email already exists");
    
    return await UserRepository.create(userData);
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
        throw new Error("Usuario no encontrado.");
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
        throw new Error("Contraseña incorrecta.");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY || "bq3yQmLCIB4lwCZw63PbiWsJ3aHUtrjHbiuZ74cBZkeIBFMsKu0EJS50ltJjUQxt",
        { expiresIn: "10m" }
    );

    return token;
  }
}

export default new UserService();