import { z } from "zod";
import requesHandler from "../lib/request-handler";
import RouteStore from "../database/schema/routes/routes.store";
import { getFromObject } from "../lib/utils";
import ApiResponse from "../lib/api-response";

const addRoute = z.object({
  from: z.string(),
  to: z.string(),
  upTime: z.string(),
  downTime: z.string(),
  acPrice: z.number(),
  normalPrice: z.number(),
  time: z.string(),
  buses: z.string().array().optional(),
});

const add = requesHandler(async (req, res, next) => {
  const data = addRoute.parse(req.body);
  const route = await RouteStore.create({
    ...data,
    company: getFromObject(res, "userId"),
  });

  res.status(201).send(new ApiResponse(201, "Route created"));
});

const getRoutesForSearch = requesHandler(async (req, res, next) => {
  const { from, to, date } = req.params;

  
});

const routeController = {
  add,
};

export default routeController;
