const { Acompanhante } = require('../models');

// Criar perfil de acompanhante
const criarPerfil = async (req, res) => {
  const { nome, bio, localizacao, preco, servicos } = req.body;

  try {
    const acompanhante = await Acompanhante.create({
      nome,
      bio,
      localizacao,
      preco,
      servicos,
      usuarioId: req.usuario.id, // Assumindo que o usuário está autenticado e seu ID está em req.usuario.id
    });

    res.status(201).json(acompanhante);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar perfil de acompanhante' });
  }
};

// Editar perfil de acompanhante
const editarPerfil = async (req, res) => {
  const { nome, bio, localizacao, preco, servicos } = req.body;

  try {
    const acompanhante = await Acompanhante.findOne({ where: { usuarioId: req.usuario.id } });
    if (!acompanhante) return res.status(404).json({ erro: 'Perfil de acompanhante não encontrado' });

    acompanhante.nome = nome || acompanhante.nome;
    acompanhante.bio = bio || acompanhante.bio;
    acompanhante.localizacao = localizacao || acompanhante.localizacao;
    acompanhante.preco = preco || acompanhante.preco;
    acompanhante.servicos = servicos || acompanhante.servicos;

    await acompanhante.save();
    res.status(200).json(acompanhante);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao editar perfil de acompanhante' });
  }
};

module.exports = { criarPerfil, editarPerfil };
