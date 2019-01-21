/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviewMarks', {
    reviewMarkID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reviewMark: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'reviewMarks'
  });
};
