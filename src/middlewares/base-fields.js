const { faker } = require('@faker-js/faker/locale/en');

module.exports = (req, res, next) => {
  const now = new Date();

  if (req.method === 'POST') {
    req.body.objectId = faker.datatype.uuid();
    req.body.createdAt = now.toJSON();
    req.body.updatedAt = now.toJSON();
  } else if (req.method === 'PUT' || req.method === 'PATCH') {
    req.body.updatedAt = now.toJSON();
  }

  next();
};
