import bcrypt from "bcrypt";

const hash = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const compare = async (dbPass: string, password: string) => {
  return await bcrypt.compare(password, dbPass);
};

const HashService = {
  hash,
  compare,
};

export default HashService;
