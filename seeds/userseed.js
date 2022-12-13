const { User } = require('../models');

const userdata = [
    {
      user_name: 'user1',
      password: 'password1',
      isVerified: true
    },
    {
      user_name: 'user2',
      password: 'password2',
      isVerified: true
    },
    {
      user_name: 'user3',
      password: 'password3',
      isVerified: false
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;