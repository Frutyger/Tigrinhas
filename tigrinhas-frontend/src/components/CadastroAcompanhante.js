import React, { useState } from 'react';
import axios from 'axios';

const CadastroAcompanhante = () => {
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [preco, setPreco] = useState('');
  const [servicos, setServicos] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dados = {
      nome,
      bio,
      localizacao,
      preco,
      servicos: JSON.parse(servicos),
    };

    try {
      const response = await axios.post('http://localhost:3001/acompanhante', dados, {
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
      <h1>Cadastrar Perfil de Acompanhante</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Localização"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <textarea
          placeholder="Serviços (JSON)"
          value={servicos}
          onChange={(e) => setServicos(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroAcompanhante;
