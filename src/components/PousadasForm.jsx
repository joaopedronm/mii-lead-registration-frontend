import React, { useState } from 'react';

const PousadasForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        amenities: '',
        quartos: '',
        diaria: '',
        tiposDeQuartos: '',
        atividades: '',
        endereco: '',
        instagram: '',
        link: ''

    });

    // Função para atualizar os campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para enviar os dados do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Envia os dados para o onSubmit, incluindo a categoria como "pousadas"
        onSubmit({ ...formData, categoria: 'pousadas' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome da pousada
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Descrição
                <textarea
                    type="text"
                    name="description"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder='Faça uma breve apresentação'
                    required
                />
            </label>
            <label>
                Facilidades da Pousada
                <textarea
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    placeholder='Wi-Fi gratuito, estacionamento, piscina, academia, etc.'
                    required
                />
            </label>
            <label>
                Número de Quartos
                <input
                    type="number"
                    name="quartos"
                    value={formData.quartos}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Qual o menor valor da diária na sua Pousada?
                <input
                    type="text"
                    name="daily"
                    value={formData.diaria}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Tipos de Quartos
                <textarea
                    name="tiposDeQuartos"
                    value={formData.tiposDeQuartos}
                    onChange={handleChange}
                    placeholder='Escreva uma breve apresentação sobre cada tipo de acomodação, incluindo a capacidade. Ex: Quarto Standard: quarto completo que acomoda até 3 pessoas; possui uma cama de casal, uma solteiro e ar condicionado'
                    required
                />
            </label>
            <label>
                Atividades oferecidas pela pousada
                <textarea
                    name="atividades"
                    value={formData.atividades}
                    onChange={handleChange}
                    placeholder='Ex: passeios de barco, aulas de kitesurf, massagem, etc. Caso tenha.'
                    required
                />
            </label>
            <label>
                Endereço completo (rua, número e bairro)
                <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Número do WhatsApp (com DDD)
                <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder='(88) 98888-8888'
                    required
                />
            </label>
            <label>
                @ do Instagram
                <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder='@pousada_santa_barbara'
                    required
                />
            </label>
            <label>
                Link para o WhatsApp
                <input
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default PousadasForm;
