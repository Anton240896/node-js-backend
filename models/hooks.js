export const handleSaveError = (error, next) => {
  error.status = 400;
  next();
};

export const updateSettings = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
