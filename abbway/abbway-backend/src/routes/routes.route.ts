import { Router } from "express";
import RoleAccess from "../middleware/rba.middleware";
import { Roles } from "../lib/types";
import { config } from "dotenv";
import routeController from "../controller/routes.controller";

const routeRouter = Router();
const rba = new RoleAccess<Roles>(
  [{ method: "POST", path: "/api/route/add", role: Roles.DRIVER }],
  { secretKey: process.env.JWT_SECRET || "" }
);

routeRouter.use(rba.guard());

routeRouter.post("/add", routeController.add);
routeRouter.get("/:from/:to/:date",  )

export default routeRouter;
