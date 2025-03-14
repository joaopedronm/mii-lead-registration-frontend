import React, { useState } from 'react';

const GroupHousesForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        amenities: '',
        capacidade: '',
        atividades: '',
        endereco: '',
        whatsapp: '',
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
        // Envia os dados para o onSubmit, incluindo a categoria como "casasGrupo"
        onSubmit({ ...formData, categoria: 'casasGrupo' });

        setFormData({
            nome: '',
            descricao: '',
            amenities: '',
            capacidade: '',
            atividades: '',
            endereco: '',
            whatsapp: '',
            instagram: '',
            link: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do local
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
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder='Faça uma breve apresentação'
                    required
                />
            </label>
            <label>
                Facilidades do local
                <textarea
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    placeholder='Wi-Fi gratuito, estacionamento, piscina, Tv a cabo, etc.'
                    required
                />
            </label>
            <label>
                Capacidade
                <input
                    type="text"
                    name="capacidade"
                    value={formData.capacidade}
                    onChange={handleChange}
                    placeholder='Número máximo de pessoas que o local hospeda.'
                    required
                />
            </label>
            <label>
                Atividades oferecidas pelo local
                <textarea
                    name="atividades"
                    value={formData.atividades}
                    onChange={handleChange}
                    placeholder='Ex: passeios de barco, aulas de jetski, stand-up etc. Caso tenha.'
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
                    name="whatsapp"
                    value={formData.whatsapp}
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

export default GroupHousesForm;
