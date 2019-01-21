/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drinkType', {
    typeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    typeName: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'drinkType'
  });
};
