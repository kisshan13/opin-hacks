import { z } from "zod";
import requesHandler from "../lib/request-handler";
import BusStore from "../database/schema/bus/bus.store";
import ApiResponse from "../lib/api-response";
import { getFromObject } from "../lib/utils";
import Bus from "../database/schema/bus/bus.schema";
import { convertToObject } from "typescript";
import convertToObjectId from "../lib/convert";

const addSchema = z.object({
  name: z.string(),
  number: z.string(),
  route: z.string().optional(),
});

const addRouteSchema = z.object({
  route: z.string(),
  bus: z.string(),
});

const add = requesHandler(async (req, res, next) => {
  const bus = addSchema.parse(req.body);
  const company = getFromObject(res, "userId");
  await BusStore.create({ ...bus, company: company });

  res.status(201).send(new ApiResponse(201, "Bus Added successfully"));
});

const addRoute = requesHandler(async (req, res, next) => {
  const data = addRouteSchema.parse(req.body);
  const routeAdd = await BusStore.addRoute({
    company: getFromObject(res, "userId"),
    bus: data.bus,
    route: data.route,
  });

  if (!routeAdd) {
    res
      .status(400)
      .send(new ApiResponse(400, "No buses or routes found with that id"));
    return;
  }

  res.status(200).send(new ApiResponse(200, "Route added to bus"));
});

const get = requesHandler(async (req, res, next) => {
  const { id } = req.params;

  return await Bus.findById(convertToObjectId(id));
});

const busController = { add, addRoute, get };

export default busController;
