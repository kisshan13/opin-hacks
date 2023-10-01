import { Router } from "express";
import busController from "../controller/bus.controller";
import RoleAccess from "../middleware/rba.middleware";
import { Roles } from "../lib/types";
import { config } from "dotenv";

config();

const busRouter = Router();

const rba = new RoleAccess<Roles>(
  [
    { method: "POST", path: "/api/bus/add", role: Roles.DRIVER },
    { method: "POST", path: "/api/bus/add-route", role: Roles.DRIVER },
  ],
  { secretKey: process.env.JWT_SECRET || "" }
);

busRouter.use(rba.guard());

busRouter.post("/add", busController.add);
busRouter.post("/add-route", busController.addRoute);
busRouter.get("/bus/:id", busController.get);

export default busRouter;
