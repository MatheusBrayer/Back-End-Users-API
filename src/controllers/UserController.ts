import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { UserResponseDTO } from "../dtos/UserResponseDTO";

export class UserController {

  private service = new UserService();

  async create(req: Request, res: Response) {
    try {
      const { name, email, password }: CreateUserDTO = req.body;

      const user = await this.service.createUser(name, email, password);

      const response: UserResponseDTO = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      return res.status(201).json(response);

    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      });
    }
  }

  async list(req: Request, res: Response) {
    const users = await this.service.listUsers();

    const response: UserResponseDTO[] = users.map(user => ({
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

      const response: UserResponseDTO = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      return res.json(response);

    } catch (error: any) {
      return res.status(404).json({
        message: error.message
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, email, password }: UpdateUserDTO = req.body;

      const user = await this.service.updateUser(id, name, email, password);

      const response: UserResponseDTO = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      return res.json(response);

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
``