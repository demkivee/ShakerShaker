/* jshint indent: 2 */

module.exports = {
function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_pass: {
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
      user_id: "number",
      user_name: "text",
      user_pass: "text"
    }
  ]
}
}