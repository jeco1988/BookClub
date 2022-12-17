const Book = require('./Book');
const User = require('./User');
const Review = require('./Review');
const Favourite = require('./Favourite');


User.belongsToMany(Book, {
    through: Favourite,
    foreignKey: 'user_id',
});

Book.belongsToMany(User, {
    through: Favourite,
    foreignKey: 'book_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
});
  
Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Book.hasMany(Review, {
    foreignKey: 'book_id',
});
  
Review.belongsTo(Book, {
    foreignKey: 'book_id',
});

module.exports = { Book, Review , User, Favourite };