'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notebookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, {foreignKey: 'userId'})
    Note.belongsTo(models.Notebook, {foreignKey: 'notebookId'})
  };
  return Note;
};
