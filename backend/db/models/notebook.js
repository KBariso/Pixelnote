'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Notebook.associate = function(models) {
    // Comment.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Notebook;
};
