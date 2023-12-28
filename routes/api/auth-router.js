import express from "express";
import { validateBody } from "../../decorators/index.js";
import { signupJoiSchema, signinJoiSchema } from "../../models/User.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  isEmptyBody,
  validateBody(signupJoiSchema),
  authController.signup
);

authRouter.post(
  "/signin",
  isEmptyBody,
  validateBody(signinJoiSchema),
  authController.signin
);

export default authRouter;
