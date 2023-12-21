export const handleSaveError = contactSchema.post(
  "save",
  (error, data, next) => {
    error.status = 400;
    next();
  }
);
