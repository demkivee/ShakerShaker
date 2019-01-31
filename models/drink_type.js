/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('drink_type', {
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type_name: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
        tableName: 'drink_type'
      });
  },
  scheme() {
    return [
      {
        type_name: "text"
      }
    ]
  }
};
