import App from "../database/app.schema";
import ApiResponse from "../lib/api-response";
import generateRandomPort from "../lib/generate-port";
import requesHandler from "../lib/request-handler";
import { z } from "zod";
import nodecache from "node-cache";

import pm2 from "pm2";
import NodeCache from "node-cache";
import launchApp from "../services/pm2.service";

const createSChema = z.object({
  appName: z.string(),
});

const appCache = new NodeCache();

appCache.set("app", 2999);

export const createApp = requesHandler(async (req, res, next) => {
  const data = createSChema.parse(req.body);
  const port = generateRandomPort();

  const app = new App({ ...data, port: port, url: "NA" });
  await app.save();
  res.status(201).send("Uploaded");
});

export const startApp = requesHandler(async (req, res, next) => {
  const { appName } = req.params;
  console.log(appName);
  if (!appName) {
    res.status(400).send(new ApiResponse(400, "Requires appname"));
    return;
  }

  const appInfo = await App.findOne({ appName: appName }).lean();
  if (!appInfo) {
    res.send("No App Found");
    return;
  }

  let port = appInfo.url;
  if (!appInfo.url) {
    port = generateRandomPort() as unknown as string;
  }

  const hello = launchApp({
    app: appInfo.appName,
    script: appInfo.url || "",
    port: parseInt(appInfo.port as string) || generateRandomPort(),
  });

  if (!hello) {
    res.status(500).send("Cant start your app now");
    return;
  }

  res.status(200).send("Running");
});

export const getAppInfo = requesHandler(async (req, res, next) => {
  const { app } = req.params;

  if (!appCache.get(app)) {
    const getAppInfo = await App.findOne({ appName: app });

    console.log(getAppInfo);

    appCache.set(app, getAppInfo?.port);
  }

  res.send({
    port: appCache.get(app),
  });
});
