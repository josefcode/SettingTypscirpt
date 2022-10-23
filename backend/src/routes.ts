import { Router } from "express";
import UserController from "./controllers/UserController";

export const routes = Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

