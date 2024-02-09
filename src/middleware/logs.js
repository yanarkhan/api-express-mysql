const logRequest = (req, res, next) => {
  console.log(`Request ini menuju path: ${req.path}`);
  next();
};

module.exports = logRequest;
