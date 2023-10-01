import { string } from "zod";
import convertToObjectId from "../../../lib/convert";
import companyRouter from "../../../routes/company.route";
import User from "../user/user.schema";
import { getVerificationExpiration } from "../user/user.store";
import Company from "./company.schema";

type CompanyFields =
  | "companyName"
  | "name"
  | "address"
  | "city"
  | "email"
  | "buses"
  | "verificationCode"
  | "verificationExpiration"
  | "password";

interface CreateCompanyField {
  companyName: string;
  name: string;
  verificationCode: number;
  city?: string;
  email: string;
  password: string;
}

interface GetCompanyFields {
  email?: string;
  id?: string;
}

interface EditCompanyFields {
  companyName?: string;
  name?: string;
  address?: string;
  city?: string;
  id: string;
}

const create = async (data: CreateCompanyField) => {
  const verificationExpiration = getVerificationExpiration();

  const company = new Company({ ...data, verificationExpiration });

  return await company.save();
};

const get = async (
  get: GetCompanyFields,
  {
    select,
    populate,
    lean,
  }: { select?: CompanyFields[]; populate?: CompanyFields[]; lean?: boolean }
) => {
  const getFields = {
    ...(get.email && { email: get.email }),
    ...(get.id && { id: get.id }),
  };

  if (Object.keys(getFields).length === 0) {
    throw new Error("Got no fields to get from");
  }

  if (lean) {
    return await Company.findOne(getFields)
      .select(select || [])
      .populate(populate || [])
      .lean();
  }

  return await Company.findOne(getFields)
    .select(select || [])
    .populate(populate || []);
};

const addBus = async ({ bus, id }: { bus: string; id: string }) => {
  const user = await Company.findByIdAndUpdate(convertToObjectId(id), {
    $push: { buses: convertToObjectId(bus) },
  }).lean();
  console.log(user);
};

const addRoute = async ({ id, route }: { id: string; route: string }) => {
  const user = await Company.findByIdAndUpdate(convertToObjectId(id), {
    routes: convertToObjectId(route),
  }).lean();
};

const editCompany = async (data: EditCompanyFields) => {
  const dataToUpdate = {
    ...(data.city && { city: data.city }),
    ...(data.address && { address: data.address }),
    ...(data.name && { name: data.name }),
    ...(data.companyName && { name: data.companyName }),
  };

  const company = await Company.findById(
    convertToObjectId(data.id),
    dataToUpdate
  ).lean();

  return company;
};

const CompanyStore = {
  create,
  get,
  addBus,
  addRoute,
  editCompany,
};

export default CompanyStore;
