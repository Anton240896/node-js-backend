import express from "express";
import contactController from "../../controllers/contact-controller.js";
// import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";

import {
  contactAddSchema,
  // movieUpdateSchema,
} from "../../schemas/contacts-schemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactController.getAll);

// contactsRouter.get("/:contactId", contactController.getById);

// contactsRouter.post(
//   "/",
//   isEmptyBody,
//   validateBody(contactAddSchema),
//   contactController.addById
// );

// contactsRouter.delete("/:contactId", contactController.deleteById);

// contactsRouter.put(
//   "/:contactId",
//   isEmptyBody,
//   validateBody(contactAddSchema),
//   contactController.updateById
// );

export default contactsRouter;
