/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('drinks_ingredients', {
      drink_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }, {
        tableName: 'drinks_ingredients'
      });
  },
  scheme() {
    return [
      {
        drink_id: "number",
        ingredient_id: "number"
      }
    ]
  }
}
