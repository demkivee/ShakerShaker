/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('ingredients', {
      ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ingredient_name: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
        tableName: 'ingredients'
      });
  },
  scheme() {
    return [
      {
        ingredient_id: "number",
        ingredient_name: "text"
      }
    ]
  }
};
