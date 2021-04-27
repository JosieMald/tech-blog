const sequelize = require('../config/connection');
const { User } = require('../models');
const userData = [
    {
        userName: "Sal",
        password: "password12345"
      },
      {
        userName: "Lernantino",
        password: "password12345"
      },
      {
        userName: "Amiko",
        password: "password12345"
      }
]
const seedDB = async () => {
    await sequelize.sync({ force:true});
    await User.bulkCreate(userData);
    // console.log(user);
    process.exit(0);
}

seedDB();
