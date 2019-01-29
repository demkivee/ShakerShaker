/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('review_marks', {
      review_mark_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      review_mark: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
        tableName: 'review_marks'
      });
  },
  scheme() {
    return [
      {
        review_mark_id: "number",
        review_mark: "text"
      }
    ]
  }
};