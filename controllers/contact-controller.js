import Contact from "../models/Contact.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

//  GET CONTACTS
const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

//  GET ID CONTACTS
const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.json(result);
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
  res.json(result);
};

//  DELETE CONTACTS
const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, error.message);
  }
  res.json({
    message: "Delete success",
  });
};

//     UPDATE FAVORITE CONTACTS
const updateStatusById = async (req, res) => {
  const { contactId } = req.params;
  const existingContact = await Contact.findByIdAndUpdate(contactId);
  if (!existingContact) {
    throw HttpError(404, error.message);
  }

  if (!req.body.favorite) {
    throw HttpError(400, error.message);
  }
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).send(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addById: ctrlWrapper(addById),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
  updateStatusById: ctrlWrapper(updateStatusById),
};
