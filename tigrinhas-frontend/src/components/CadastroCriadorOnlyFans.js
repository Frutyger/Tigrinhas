import React, { useState } from 'react';
import axios from 'axios';

const CadastroCriadorOnlyFans = () => {
  const [bio, setBio] = useState('');
  const [planoAssinatura, setPlanoAssinatura] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dados = {
      bio,
      plano_assinatura: JSON.parse(planoAssinatura),
      conteudo: JSON.parse(conteudo),
    };

    try {
      const response = await axios.post('http://localhost:3001/criador-onlyfans', dados, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Adicionando token de autenticação
        },
      });
      console.log('Perfil criado:', response.data);
    } catch (error) {
      console.error('Erro ao criar perfil:', error);
    }
  };

  return (
    <div>
      <h1>Cadastrar Perfil de Criador OnlyFans</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <textarea
          placeholder="Plano de Assinatura (JSON)"
          value={planoAssinatura}
          onChange={(e) => setPlanoAssinatura(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo Exclusivo (JSON)"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCriadorOnlyFans;
