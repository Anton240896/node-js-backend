import express from "express";
import contactController from "../../controllers/contact-controller.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  contactAddSchema,
  contactUpdateSchema,
  contactFavoriteSchema,
} from "../../models/Contact.js";

const contactsRouter = express.Router();

//   GET CONTACTS
contactsRouter.get("/", contactController.getAll);

//   GET ID CONTACTS
contactsRouter.get("/:contactId", isValidId, contactController.getById);

//   ADD CONTACTS
contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactAddSchema),
  contactController.addById
);

//   DELETE CONTACTS
contactsRouter.delete("/:contactId", isValidId, contactController.deleteById);

//   UPDATE CONTACTS
contactsRouter.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactUpdateSchema),
  contactController.updateById
);

//   EXAMINATION (TRUE OR FALSE)
contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactFavoriteSchema),
  contactController.updateById
);

export default contactsRouter;
