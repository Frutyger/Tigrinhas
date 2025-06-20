module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apelido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    papel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'usuario',
    },
  });

  Usuario.associate = function (modelos) {
    Usuario.hasOne(modelos.Acompanhante);
    Usuario.hasOne(modelos.CriadorOnlyFans);
  };

  return Usuario;
};
