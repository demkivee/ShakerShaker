/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drinks', {
    drinkID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    drinkName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    drinkType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'drinkType',
        key: 'typeID'
      }
    }
  }, {
    tableName: 'drinks'
  });
};
