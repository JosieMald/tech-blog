const sequelize = require('../config/connection');
const { User } = require('../models');
const userData = [
    {
        user_name: "Sal",
        password: "password12345"
      },
      {
        user_name: "Lernantino",
        password: "password12345"
      },
      {
        user_name: "Amiko",
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
