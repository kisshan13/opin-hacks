import jwt from "jsonwebtoken";

import type { Request, Response, NextFunction } from "express";
import ApiResponse from "../lib/api-response";
import { addToObject, getFromObject } from "../lib/utils";
import { tokenSchema } from "../services/jwt.service";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH";

export interface PathConfig<T> {
  path: string;
  role: T;
  method: HttpMethods;
}

interface AccessOptions {
  secretKey: string;
  cookieBased?: boolean;
}

class RoleAccess<T> {
  config: PathConfig<T>[];
  options: AccessOptions;
  constructor(config: PathConfig<T>[], options: AccessOptions) {
    this.config = config;
    this.options = options;
  }

  guard() {
    return (req: Request, res: Response, next: NextFunction) => {
      const { originalUrl, method } = req;
      const token = getFromObject(res, "token");
      const config = this.config.find(
        (con) => con.method === method && con.path === originalUrl
      );

      if (!config) {
        next();
        return;
      }
      if (!token) {
        const response = new ApiResponse(
          401,
          "No auth token present in header"
        );
        res.status(response.statusCode).send(response);
        return;
      }

      const authTokenInfo = tokenSchema.parse(this.verify(token));
      console.log(authTokenInfo);
      addToObject(res, "userId", authTokenInfo.id);
      console.log(config);
      if (authTokenInfo.role === config.role) {
        next();
        return;
      }

      if (this.options.cookieBased) {
      }

      res
        .status(403)
        .send(
          new ApiResponse(403, "Missing permission to access this endpoint")
        );
    };
  }

  sign(obj: Object) {
    return jwt.sign(obj, this.options.secretKey);
  }

  verify(token: string) {
    return jwt.verify(token, this.options.secretKey);
  }
}

export default RoleAccess;
