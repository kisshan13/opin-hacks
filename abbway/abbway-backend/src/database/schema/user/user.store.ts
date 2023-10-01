import User from "./user.schema";

type UserField =
  | "email"
  | "username"
  | "password"
  | "verificationCode"
  | "verificationExpiration"
  | "tickets"
  | "wallet";

interface CreateUser {
  name: string;
  email: string;
  password: string;
  verificationCode: number;
}

interface GetUserField {
  email?: string;
  id?: string;
}

export function getVerificationExpiration() {
  const currentDatetime = new Date();
  const futureDatetime = new Date(currentDatetime.getTime() + 10 * 60000); // 10 minutes in milliseconds

  return futureDatetime;
}

const create = async (data: CreateUser) => {
  const verificationExpiration = getVerificationExpiration();

  const user = new User({ ...data, verificationExpiration });

  return await user.save();
};

const get = async (
  get: GetUserField,
  {
    select,
    populate,
    lean,
  }: { select?: UserField[]; populate?: UserField[]; lean?: boolean }
) => {
  const getFields = {
    ...(get.email && { email: get.email }),
    ...(get.id && { id: get.id }),
  };

  if (Object.keys(getFields).length === 0) {
    throw new Error("Got no fields to get from");
  }

  if (lean) {
    return await User.findOne(getFields)
      .select(select || [])
      .populate(populate || [])
      .lean();
  }

  return await User.findOne(getFields)
    .select(select || [])
    .populate(populate || []);
};

const UserStore = {
  create,
  get,
};

export default UserStore;
