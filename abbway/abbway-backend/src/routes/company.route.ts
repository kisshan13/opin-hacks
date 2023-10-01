import { Router } from "express";
import companyController from "../controller/company.controller";
import RoleAccess from "../middleware/rba.middleware";
import { Roles } from "../lib/types";
import { config } from "dotenv";

config();

const companyRouter = Router();

const rba = new RoleAccess(
  [{ method: "PATCH", path: "/api/company/edit", role: Roles.DRIVER }],
  { secretKey: process.env.JWT_SECRET || "" }
);

companyRouter.use(rba.guard());

companyRouter.post("/signup", companyController.signup);
companyRouter.post("/verify", companyController.verify);
companyRouter.post("/signin", companyController.signin);
companyRouter.patch("/edit", companyController.edit);

export default companyRouter;
