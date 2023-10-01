import { Router } from "express";
import { upload } from "../controller/build.controller";

import multer from "multer";
const storage = multer.memoryStorage();
const uploadFile = multer({ storage });

const buildRouter = Router();

buildRouter.post("/upload", uploadFile.single("folderZip"), upload);

export default buildRouter;
