const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
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
