'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId:  {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Notebook.associate = function(models) {
    Notebook.belongsTo(models.User, {foreignKey: 'userId'})
    Notebook.hasMany(models.Note, {foreignKey: 'notebookId'})
  };
  return Notebook;
};
