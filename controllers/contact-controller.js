import Contact from "../models/Contact.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

import {
  contactAddSchema,
  contactUpdateSchema,
} from "../schemas/contacts-schemas.js";

const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsService.getContactById(contactId);
    if (!result) {
      throw HttpError(404, error.message);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addById = async (req, res, next) => {
  try {
    const { error } = contactAddSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await contactsService.addContact(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { error } = contactUpdateSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await contactsService.updateContactById(id, req.body);
    if (!result) {
      throw HttpError(404, error.message);
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactAddSchema.removeContact(id);
    if (!result) {
      throw HttpError(404, error.message);
    }

    res.status(200).json({
      message: "Contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAll: ctrlWrapper(getAll),
  getById,
  addById,
  updateById,
  deleteById,
};
