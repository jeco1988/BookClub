const sequelize = require('../config/connection');
const seedUser = require('./userseed');
const seedReview = require('./reviewseed');
const seedBook = require('./bookseed');
const seedFavourite = require('./favouriteseed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBook();
  await seedReview();
  await seedFavourite();

  process.exit(0);
};

seedAll();
