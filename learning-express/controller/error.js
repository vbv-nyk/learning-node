exports.getError = (req, res, next) => {
  res.status(404).render("page404");
};
