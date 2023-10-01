import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { Roles } from "../lib/types";
import { z } from "zod";

config();

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
  throw new Error("Secret token not loaded");
}

export const tokenSchema = z.object({
  role: z.string(),
  id: z.string(),
});

interface GenTokenFields {
  role: Roles;
  id: string;
}

const genToken = (data: GenTokenFields) => {
  return jwt.sign(data, SECRET, { expiresIn: "30days" });
};

const decodeToken = (token: string) => {
  return tokenSchema.parse(jwt.verify(token, SECRET));
};

const JwtService = {
  genToken,
  decodeToken,
};

export default JwtService;
