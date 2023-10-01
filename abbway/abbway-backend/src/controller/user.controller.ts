import User from "../database/schema/user/user.schema";
import UserStore from "../database/schema/user/user.store";
import ApiResponse from "../lib/api-response";
import requestHandler from "../lib/request-handler";
import { z } from "zod";
import HashService from "../services/hash.service";
import EmailService from "../services/mail.service";
import JwtService from "../services/jwt.service";
import { Roles } from "../lib/types";
import requesHandler from "../lib/request-handler";

const newUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const userSignupSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const userVerifySchema = z.object({
  email: z.string().email(),
  otp: z.number(),
});

const newUser = requestHandler(async (req, res, next) => {
  const { email, name, password } = newUserSchema.parse(req.body);
  const otp = Math.floor(100000 + Math.random() * 900000);

  const user = await UserStore.create({
    email,
    password: await HashService.hash(password),
    name,
    verificationCode: otp,
  });

  EmailService.initiateOtp({ email: email, otp: otp });

  res.status(201).send(new ApiResponse(201, "Verification Code sent"));
});

const verify = requestHandler(async (req, res, next) => {
  const { email, otp } = userVerifySchema.parse(req.body);

  const user = await UserStore.get(
    { email: email },
    { select: ["verificationCode", "verificationExpiration"], lean: true }
  );

  if (!user) {
    return res.status(400).send(new ApiResponse(400, "NO USER FOUND"));
  }

  if ((user.verificationExpiration as unknown as number) < Date.now()) {
    res.status(400).send(new ApiResponse(400, "OTP EXPIRED"));
    return;
  }

  if ((user.verificationExpiration as unknown as number) > Date.now()) {
    if (user.verificationCode === otp) {
      const token = JwtService.genToken({
        role: Roles.USER,
        id: user._id.toString(),
      });
      res
        .status(200)
        .send(new ApiResponse(200, "User logged in successfully", { token }));
      return;
    }
  }
});

const signin = requesHandler(async (req, res, next) => {
  const { email, password } = userSignupSchema.parse(req.body);

  const user = await UserStore.get({ email: email }, { lean: true });

  if (!user) {
    res.status(400).send(new ApiResponse(400, "Wrong Credentials"));
    return;
  }

  const isPasswordMatched = await HashService.compare(user.password, password);

  if (!isPasswordMatched) {
    res.status(400).send(new ApiResponse(400, "Wrong Credentials"));
    return;
  }

  res.status(200).send(
    new ApiResponse(200, "Logged in successfully", {
      token: await JwtService.genToken({
        id: user._id.toString(),
        role: Roles.USER,
      }),
    })
  );
});

const userController = {
  newUser,
  verify,
  signin,
};

export default userController;
