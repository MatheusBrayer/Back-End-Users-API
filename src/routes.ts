import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();
const controller = new UserController();

routes.post("/users", (req, res) => controller.create(req, res));
routes.get("/users", (req, res) => controller.list(req, res));
routes.get("/users/:id", (req, res) => controller.getById(req, res));
routes.put("/users/:id", (req, res) => controller.update(req, res));
routes.delete("/users/:id", (req, res) => controller.delete(req, res));

export default routes;