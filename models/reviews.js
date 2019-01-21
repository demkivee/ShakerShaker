/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    reviewUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reviewDrink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reviewMark: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'reviewMarks',
        key: 'reviewMarkID'
      }
    },
    reviewText: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reviews'
  });
};
