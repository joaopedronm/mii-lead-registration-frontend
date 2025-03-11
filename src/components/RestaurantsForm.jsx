// src/components/categorias/RestaurantesForm.js
import React, { useState } from 'react';

const RestaurantesForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
        tipoCozinha: '',
        // Adicione outros campos específicos de restaurantes
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, categoria: 'restaurantes' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Mensagem:
                <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Tipo de Cozinha:
                <input
                    type="text"
                    name="tipoCozinha"
                    value={formData.tipoCozinha}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default RestaurantesForm;