import React, { useState } from 'react';

const MassagemForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        servicos: '',
        horarioDeFuncionamento: '',
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
        // Envia os dados para o onSubmit, incluindo a categoria como "massagem"
        onSubmit({ ...formData, categoria: 'massagem' });

        setFormData({
            nome: '',
            descricao: '',
            especializacao: '',
            servicos: '',
            horarioDeFuncionamento: '',
            endereco: '',
            whatsapp: '',
            instagram: '',
            link: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do(a) Profissional ou do Estabelecimento
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
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder='Faça uma breve apresentação'
                    required
                />
            </label>
            <label>
                Serviços Oferecidos
                <textarea
                    name="servicos"
                    value={formData.servicos}
                    onChange={handleChange}
                    placeholder='Ex: Massagem relaxante, Terapia com ventosas, Reflexologia, etc.'
                    required
                />
            </label>
            <label>
                Horário de Atendimento
                <textarea
                    name="horarioDeFuncionamento"
                    value={formData.horarioDeFuncionamento}
                    onChange={handleChange}
                    placeholder='Liste os horários de atendimento de Seg. a Dom. Ex: Segunda-Feira: 08:00 às 15:00.'
                    required
                />
            </label>
            <label>
                Endereço
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

export default MassagemForm;
