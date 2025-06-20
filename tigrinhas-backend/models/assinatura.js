module.exports = (sequelize, DataTypes) => {
  const Assinatura = sequelize.define('Assinatura', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ativa',
    },
    detalhes_plano: {
      type: DataTypes.JSONB,
    },
  });

  Assinatura.associate = function (modelos) {
    Assinatura.belongsTo(modelos.Usuario); // Usuário assinante
    Assinatura.belongsTo(modelos.CriadorOnlyFans); // Criador do OnlyFans
  };

  return Assinatura;
};
