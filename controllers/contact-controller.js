import Contact from "../models/Contact.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

//  GET CONTACTS
const getAll = async (req, res) => {
  const result = await Contact.find();
  res.status(201).json(result);
};

//  GET ID CONTACTS
const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.status(201).json(result);
};

//  ADD ID CONTACTS
const addById = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

//  UPDATE CONTACTS
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId, req.body);
  if (!result) {
    throw HttpError(404, error.message);
  }
};

//  DELETE CONTACTS
const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.status(201).json({
    message: "Delete success",
  });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addById: ctrlWrapper(addById),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
