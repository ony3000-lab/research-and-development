module.exports = (req, res, next) => {
  const failurePercentage = 15;

  if (Math.random() < failurePercentage / 100) {
    res.status(500).jsonp({
      message: `Request failed with ${failurePercentage}% chance`,
    });
    return;
  }

  next();
};
