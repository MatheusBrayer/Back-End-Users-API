import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

  private service = new UserService();

  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user = await this.service.createUser(name, email, password);

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email
      });

    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async list(req: Request, res: Response) {
    const users = await this.service.listUsers();

    const response = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));

    return res.json(response);
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const user = await this.service.getUserById(id);

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email
      });

    } catch (error: any) {
      return res.status(404).json({
        message: error.message
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, email, password } = req.body;

      const user = await this.service.updateUser(id, name, email, password);

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email
      });

    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      await this.service.deleteUser(id);

      return res.status(204).send();

    } catch (error: any) {
      return res.status(404).json({
        message: error.message
      });
    }
  }
}