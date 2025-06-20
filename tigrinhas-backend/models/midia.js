module.exports = (sequelize, DataTypes) => {
  const Midia = sequelize.define('Midia', {
    tipo_midia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caminho_arquivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_conteudo: {
      type: DataTypes.STRING,
    },
  });

  Midia.associate = function (modelos) {
    Midia.belongsTo(modelos.Usuario);
  };

  return Midia;
};
