module.exports = (sequelize, DataTypes) => {
  const CriadorOnlyFans = sequelize.define('CriadorOnlyFans', {
    bio: {
      type: DataTypes.TEXT,
    },
    plano_assinatura: {
      type: DataTypes.JSONB,
    },
    conteudo: {
      type: DataTypes.JSONB,
    },
    verificado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  CriadorOnlyFans.associate = function (modelos) {
    CriadorOnlyFans.belongsTo(modelos.Usuario);
  };

  return CriadorOnlyFans;
};
