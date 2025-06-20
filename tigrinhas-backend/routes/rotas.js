const express = require('express');
const router = express.Router();
const { cadastrar, login } = require('../controllers/usuarioControlador');
const { criarPerfil, editarPerfil } = require('../controllers/acompanhanteControlador');
const { criarPerfilCriador, editarPerfilCriador } = require('../controllers/criadorOnlyFansControlador');
router.post('/cadastro', cadastrar);
router.post('/login', login);


const { autenticar } = require('../middlewares/autenticacao');

router.post('/acompanhante', autenticar, criarPerfil);
router.put('/acompanhante', autenticar, editarPerfil);

router.post('/criador-onlyfans', autenticar, criarPerfilCriador);
router.put('/criador-onlyfans', autenticar, editarPerfilCriador);

module.exports = router;
