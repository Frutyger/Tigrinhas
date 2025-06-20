module.exports = (sequelize, DataTypes) => {
  const Avaliacao = sequelize.define('Avaliacao', {
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
    comentario: {
      type: DataTypes.TEXT,
    },
  });

  Avaliacao.associate = function (modelos) {
    Avaliacao.belongsTo(modelos.Usuario);
  };

  return Avaliacao;
};
