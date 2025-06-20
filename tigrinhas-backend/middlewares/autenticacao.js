const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const autenticar = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ erro: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, 'segredo');
    const usuario = await Usuario.findByPk(decoded.id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    req.usuario = usuario; // Adiciona o usuário autenticado ao request
    next();
  } catch (err) {
    res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
};

module.exports = { autenticar };
