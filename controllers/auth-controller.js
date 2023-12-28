import { User } from "../models/User.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.json({
    username: newUser.username,
    email: newUser.email,
  });
};

export default {
  signup: ctrlWrapper(signup),
};
