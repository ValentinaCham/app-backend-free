import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async register(req: Request, res: Response) {
    try {
      const user = await UserService.register(req.body);
      res.status(201).json({ message: "User created successfully", user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await UserService.login(email, password);
      
      res.json({ token });
    } catch (error: any) {
      res.status(401).json({ msg: error.message });
    }
  };
}

export default new UserController();