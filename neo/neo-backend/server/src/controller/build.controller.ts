import unzipper from "unzipper";
import requesHandler from "../lib/request-handler";
import path from "path";
import fs from "fs";
import App from "../database/app.schema";

export const upload = requesHandler(async (req, res, next) => {
  console.log("heii");
  if (!req.file) {
    return res.status(400).send("No File Uploaded");
  }

  const tempDirRoot = path.join(__dirname, "temp");
  if (!fs.existsSync(tempDirRoot)) {
    fs.mkdirSync(tempDirRoot, { recursive: true });
  }

  const tempDir = path.join(tempDirRoot, `folder_${Date.now()}`);
  fs.mkdirSync(tempDir);

  try {
    const zipStream = req.file.buffer;
    await unzipper.Open.buffer(zipStream).then((d) =>
      d.extract({ path: tempDir })
    );

    const app = await App.findOne();

    if (!app) {
      res.send("Folder uploaded and extracted successfully.");

      return;
    }

    if (!app.url) {
      res.send("Folder uploaded and extracted successfully.");
      return;
    }

    app.url = tempDir;

    await app.save();
    console.log("hello");
    res.send("Folder uploaded successfully.");
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});
