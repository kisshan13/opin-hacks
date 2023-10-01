import BusStore from "../bus/bus.store";
import CompanyStore from "../company/company.store";
import Routes from "./routes.schema";

type RouteFields =
  | "from"
  | "to"
  | "bus"
  | "upTime"
  | "downTime"
  | "acPrice"
  | "normalPrice"
  | "buses"
  | "company";

interface CreateRouteFields {
  from: string;
  to: string;
  upTime: string;
  downTime: string;
  acPrice: number;
  normalPrice: number;
  time: string;
  buses?: string[];
  company: string;
}

const create = async (data: CreateRouteFields) => {
  const route = new Routes({ ...data });
  CompanyStore.addRoute({ id: data.company, route: route.id });
  await route.save();
  if (data?.buses?.length) {
    Promise.all(
      data.buses?.map((b) =>
        BusStore.addRoute({ bus: b, route: route.id, company: data.company })
      )
    );
  }
};

const RouteStore = {
  create,
};

export default RouteStore;
