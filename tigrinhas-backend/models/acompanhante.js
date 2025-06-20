module.exports = (sequelize, DataTypes) => {
  const Acompanhante = sequelize.define('Acompanhante', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    localizacao: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
    },
    servicos: {
      type: DataTypes.JSONB,
    },
    verificado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Acompanhante.associate = function (modelos) {
    Acompanhante.belongsTo(modelos.Usuario);
  };

  return Acompanhante;
};
