const { CriadorOnlyFans } = require('../models');

// Criar perfil de criador OnlyFans
const criarPerfilCriador = async (req, res) => {
  const { bio, plano_assinatura, conteudo } = req.body;

  try {
    const criador = await CriadorOnlyFans.create({
      bio,
      plano_assinatura,
      conteudo,
      usuarioId: req.usuario.id, // Assumindo que o usuário está autenticado e seu ID está em req.usuario.id
    });

    res.status(201).json(criador);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar perfil de criador OnlyFans' });
  }
};

// Editar perfil de criador OnlyFans
const editarPerfilCriador = async (req, res) => {
  const { bio, plano_assinatura, conteudo } = req.body;

  try {
    const criador = await CriadorOnlyFans.findOne({ where: { usuarioId: req.usuario.id } });
    if (!criador) return res.status(404).json({ erro: 'Perfil de criador OnlyFans não encontrado' });

    criador.bio = bio || criador.bio;
    criador.plano_assinatura = plano_assinatura || criador.plano_assinatura;
    criador.conteudo = conteudo || criador.conteudo;

    await criador.save();
    res.status(200).json(criador);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao editar perfil de criador OnlyFans' });
  }
};

module.exports = { criarPerfilCriador, editarPerfilCriador };
