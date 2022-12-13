const sequelize = require('../config/connection');
const seedUser = require('./userseed');
const seedReview = require('./reviewseed');
const seedBook = require('./bookseed');
const seedReview = require('./reviewseed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedReview();

  await seedBook();

  await seedReview();

  process.exit(0);
};

seedAll();
