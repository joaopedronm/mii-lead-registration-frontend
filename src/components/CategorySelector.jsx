import React from 'react';

const CategoriaSelector = ({ onSelectCategoria }) => {
    const categorias = [
        { id: 'pousadas', nome: 'Pousadas' },
        { id: 'restaurantes', nome: 'Restaurantes' },
        { id: 'casasGrupo', nome: 'Casas para Grupos / Casas de Praia' },
        { id: 'bares', nome: 'Bares' },
        { id: 'pizzarias', nome: 'Pizzarias' },
        { id: 'espetinhos', nome: 'Espetinhos' },
        { id: 'acais', nome: 'Açaís / Sorveterias' },
        { id: 'deliverys', nome: 'Outros Deliverys' },
        { id: 'kiteSchools', nome: 'Escolas de KiteSurf' },
        { id: 'academias', nome: 'Academias' },
        { id: 'arenas', nome: 'Arenas' },
        { id: 'personal', nome: 'Personal Trainer' },
        { id: 'farmacias', nome: 'Farmácias' },
        { id: 'clinicas', nome: 'Clínicas' },
        { id: 'massagem', nome: 'Massoterapeutas' },
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