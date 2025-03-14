import React from 'react';

const CategoriaSelector = ({ onSelectCategoria }) => {
    const categorias = [
        { id: 'pousadas', nome: 'Pousadas' },
        { id: 'restaurantes', nome: 'Restaurantes' },
        { id: 'casasGrupo', nome: 'Casas para Grupos / Casas de Praia' },
        { id: 'outros', nome: 'Outros' },
    ];

    return (
        <select onChange={(e) => onSelectCategoria(e.target.value)}>
            <option value="">Selecione a categoria do seu estabelecimento</option>
            {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                    {cat.nome}
                </option>
            ))}
        </select>
    );
};

export default CategoriaSelector;