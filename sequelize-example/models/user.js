const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        name: {
          type: Sequelize.STRING,
        },
        age: {
          type: Sequelize.INTEGER,
        },
        addr: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
      }
    );
  }
}

module.exports = User;
