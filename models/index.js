const Book = require('./Book');
const User = require('./User');
const Review = require('./Review');
const Favourite = require('./Favourite');


User.hasMany(Favourite, {
    foreignKey: 'user_id',
});
  
Favourite.belongsTo(User, {
    foreignKey: 'user_id',
});

Book.hasMany(Favourite, {
    foreignKey: 'book_id',
});
  
Favourite.belongsTo(Book, {
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