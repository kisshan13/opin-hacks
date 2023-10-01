import convertToObjectId from "../../../lib/convert";
import CompanyStore from "../company/company.store";
import Bus from "./bus.schema";

type BusFields = "name" | "number" | "company" | "route";

interface GetBusFields {
  company?: string;
  number?: string;
}

interface CreateBus {
  name: string;
  number: string;
  company: string;
  route?: string;
}

interface AddRoute {
  bus: string;
  route: string;
  company: string;
}

const create = async (data: CreateBus) => {
  const bus = new Bus(data);

  await bus.save();

  const company = await CompanyStore.addBus({ bus: bus.id, id: data.company });
};

const addRoute = async (data: AddRoute) => {
  const bus = await Bus.findByIdAndUpdate(convertToObjectId(data.bus), {
    $push: { route: convertToObjectId(data.route) },
  });

  // const bus = await Bus.findByIdAndUpdate(convertToObjectId(data.bus), {
  //   $push: { route: convertToObjectId(data.route) },
  // });

  if (!bus) {
    return false;
  }

  return true;
};

const get = async (userId: string) => {
  const bus = await Bus.findById(convertToObjectId(userId));

  return bus;
};

const BusStore = {
  create,
  addRoute,
};

export default BusStore;
