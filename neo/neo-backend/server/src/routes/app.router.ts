import { Router } from "express";
import { createApp, getAppInfo, startApp } from "../controller/app.controller";

const appRouter = Router();

appRouter.post("/create", createApp);
appRouter.post("/start/:appName", startApp);
appRouter.get("/get/:app", getAppInfo);

export default appRouter;
