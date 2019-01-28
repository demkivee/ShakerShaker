/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('users', {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      userName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userPass: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
        tableName: 'users'
      });
  },

  scheme() {
    return [
      {
        userID: "number",
        userName: "text",
        userPass: "text"
      }
    ]
  }
}