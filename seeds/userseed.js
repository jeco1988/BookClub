const { User } = require('../models');

const userdata = [
    {
      user_name: 'user1',
      password: 'password1',
      isVerified: false
    },
    {
      user_name: 'user2',
      password: 'password2',
      isVerified: false
    },
    {
      user_name: 'user3',
      password: 'password3',
      isVerified: false
    },
    {
      user_name: 'user4',
      password: 'password4',
      isVerified: false
    },
    {
      user_name: 'user5',
      password: 'password5',
      isVerified: false
    },
    {
      user_name: 'user6',
      password: 'password6',
      isVerified: false
    },
    {
      user_name: 'user7',
      password: 'password8',
      isVerified: false
    },
    {
      user_name: 'user9',
      password: 'password9',
      isVerified: false
    },
    {
      user_name: 'user10',
      password: 'password10',
      isVerified: false
    },
    {
      user_name: 'user11',
      password: 'password11',
      isVerified: false
    },
    {
      user_name: 'user12',
      password: 'password12',
      isVerified: false
    },
    {
      user_name: 'user13',
      password: 'password13',
      isVerified: false
    },
    {
      user_name: 'user14',
      password: 'password14',
      isVerified: false
    },
    {
      user_name: 'user8',
      password: 'password8',
      isVerified: false
    },
    {
      user_name: 'user15',
      password: 'password15',
      isVerified: false
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;