/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drinksIngredients', {
    drinkID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ingredientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'drinksIngredients'
  });
};
