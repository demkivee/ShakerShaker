/* jshint indent: 2 */

module.exports = {
  function(sequelize, DataTypes) {
    return sequelize.define('reviews', {
      review_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      review_drink: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      review_mark: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      review_text: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
        tableName: 'reviews'
      });
  },
  scheme() {
    return [
      {
        review_user: "number",
        review_drink: "number",
        review_mark: "number",
        review_text: "text"
      }
    ]
  }
};
