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
}

export default new UserController();