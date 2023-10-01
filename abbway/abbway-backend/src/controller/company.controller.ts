import { z } from "zod";
import CompanyStore from "../database/schema/company/company.store";
import requestHandler from "../lib/request-handler";
import EmailService from "../services/mail.service";
import HashService from "../services/hash.service";
import ApiResponse from "../lib/api-response";
import JwtService from "../services/jwt.service";
import { Roles } from "../lib/types";
import requesHandler from "../lib/request-handler";
import { getFromObject } from "../lib/utils";

const signupSchema = z.object({
  companyName: z.string(),
  name: z.string(),
  address: z.string().optional(),
  city: z.string().optional(),
  email: z.string().email(),
  password: z.string(),
});

const verifySchema = z.object({
  email: z.string().email(),
  otp: z.number(),
});

const editSchema = z.object({
  name: z.string().optional(),
  companyName: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
});

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const signup = requestHandler(async (req, res, next) => {
  const data = signupSchema.parse(req.body);
  const otp = Math.floor(100000 + Math.random() * 900000);

  await CompanyStore.create({
    ...data,
    password: await HashService.hash(data.password),
    verificationCode: otp,
  });
  EmailService.initiateOtp({ email: data.email, otp: otp });

  res.status(201).send(new ApiResponse(201, "Verification Code Sent"));
});

const verify = requestHandler(async (req, res, next) => {
  const { email, otp } = verifySchema.parse(req.body);

  const user = await CompanyStore.get(
    { email: email },
    { select: ["verificationCode", "verificationExpiration"], lean: true }
  );

  console.log(!user);

  if (!user) {
    res.status(400).send(new ApiResponse(400, "NO USER FOUND"));
    return;
  }

  // if ((user.verificationExpiration as unknown as number) < Date.now()) {
  //   res.status(400).send(new ApiResponse(400, "OTP EXPIRED"));
  //   return;
  // }

  if (user.verificationCode === otp) {
    const token = JwtService.genToken({
      role: Roles.DRIVER,
      id: user._id.toString(),
    });
    res
      .status(200)
      .send(new ApiResponse(200, "Logged in successfully", { token }));
    return;
  }

  res.status(400).send(new ApiResponse(400, "Wrong Otp"));
  // if ((user.verificationExpiration as unknown as number) < Date.now()) {
  // }
});

const signin = requestHandler(async (req, res, next) => {
  const { email, password } = signinSchema.parse(req.body);

  const company = await CompanyStore.get({ email: email }, { lean: true });

  if (!company) {
    res.status(400).send(new ApiResponse(400, "Wrong Credentials"));
    return;
  }

  const isPasswordMatched = await HashService.compare(
    company.password,
    password
  );

  if (!isPasswordMatched) {
    res.status(400).send(new ApiResponse(400, "Wrong Credentials"));
    return;
  }

  res.status(200).send(
    new ApiResponse(200, "Logged in successfully", {
      token: await JwtService.genToken({
        id: company._id.toString(),
        role: Roles.DRIVER,
      }),
    })
  );
});

const edit = requesHandler(async (req, res, next) => {
  const data = editSchema.parse(req.body);

  const company = await CompanyStore.editCompany({
    ...data,
    id: getFromObject(res, "userId"),
  });

  if (company) {
    res.status(200).json(new ApiResponse(200, "Updated"));
    return;
  }

  res.status(400).json(new ApiResponse(400, "No Company found"));
});

const companyController = {
  signup,
  verify,
  signin,
  edit,
};

export default companyController;
