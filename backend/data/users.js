const bcrypt = require('bcryptjs');
const users = [
  {
    name: 'Admin user',
    email: 'admin@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Mats',
    email: 'mats@email.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Michel',
    email: 'michel@email.com',
    password: bcrypt.hashSync('12345', 10),
  },
];
