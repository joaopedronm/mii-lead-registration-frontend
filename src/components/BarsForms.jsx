import React, { useState } from 'react';

const BarsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        bebidas: '',
        especialidadesDaCasa: '',
        atracoesFrequentes: '',
        horarioDeFuncionamento: '',
        entregas: '',
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
        // Envia os dados para o onSubmit, incluindo a categoria como "bares"
        onSubmit({ ...formData, categoria: 'bares' });

        setFormData({
            nome: '',
            descricao: '',
            bebidas: '',
            especialidadesDaCasa: '',
            atracoesFrequentes: '',
            horarioDeFuncionamento: '',
            entregas: '',
            endereco: '',
            whatsapp: '',
            instagram: '',
            link: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do Bar
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
                Bebidas
                <textarea
                    name="bebidas"
                    value={formData.bebidas}
                    onChange={handleChange}
                    placeholder='Cervejas, Destilados, Caipirinhas, etc.'
                    required
                />
            </label>
            <label>
                Especialidades da Casa
                <textarea
                    name="especialidadesDaCasa"
                    value={formData.especialidadesDaCasa}
                    onChange={handleChange}
                    placeholder='Descreva os principais drinks ou refeições do seu bar.'
                    required
                />
            </label>
            <label>
                Atrações frequentes
                <textarea
                    name="atracoesFrequentes"
                    value={formData.atracoesFrequentes}
                    onChange={handleChange}
                    placeholder='Ex: música ao vivo, vista para o mar, sunset, etc.'
                    required
                />
            </label>
            <label>
                Horário de Funcionamento
                <textarea
                    name="horarioDeFuncionamento"
                    value={formData.horarioDeFuncionamento}
                    onChange={handleChange}
                    placeholder='Liste os horários de funcionamento de Seg. a Dom. Ex: Segunda-Feira: 08:00 às 15:00.'
                    required
                />
            </label>
            <label>
                Realiza entregas?
                <input
                    type="text"
                    name="entregas"
                    value={formData.entregas}
                    onChange={handleChange}
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

export default BarsForm;
