/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('drinks', {
      drink_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      drink_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      drink_type: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
        tableName: 'drinks'
      });
  },
  scheme() {
    return [
      {
        drink_id: "number",
        drink_name: "number",
        drink_type: "number"
      }
    ]
  }
};
