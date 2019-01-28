/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('ingredients', {
      ingredientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ingredientName: {
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
        ingredientID: "number",
        ingredientName: "text"
      }
    ]
  }
};

