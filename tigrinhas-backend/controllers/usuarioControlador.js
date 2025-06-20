const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

const cadastrar = async (req, res) => {
  const { email, senha, apelido, papel } = req.body;

  try {
    const senha_hash = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({
      email,
      senha_hash,
      apelido,
      papel,
    });

    const token = jwt.sign({ id: usuario.id }, 'segredo', { expiresIn: '1h' });
    res.status(201).json({ usuario, token });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao registrar usuário' });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(400).json({ erro: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaValida) return res.status(400).json({ erro: 'Senha incorreta' });

    const token = jwt.sign({ id: usuario.id }, 'segredo', { expiresIn: '1h' });
    res.json({ usuario, token });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao realizar login' });
  }
};

module.exports = { cadastrar, login };
