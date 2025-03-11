// src/App.jsx
import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import PousadasForm from './components/PousadasForm';
import RestaurantsForm from './components/RestaurantsForm';
import './App.css';

const App = () => {
    const [categoria, setCategoria] = useState('');

    const handleSubmit = async (dados) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/send-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });
            const result = await response.json();
            console.log('Sucesso:', result);
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar o formulário.');
        }
    };

    const renderForm = () => {
        switch (categoria) {
            case 'pousadas':
                return <PousadasForm onSubmit={handleSubmit} />;
            case 'restaurantes':
                return <RestaurantsForm onSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="image-section">
                <div className='image-container'>
                    <img src="../src/assets/img/logo-mii.png" alt="logo-mii" width={100} />
                </div>
                <div>
                    <div className="content-container">
                        <h1>Alcance mais clientes com o Made in Itarema App!</h1>
                        <p>
                        Nossa cidade recebe milhares de visitantes todos os anos, e seu negócio pode se destacar!
                        Cadastre-se para divulgar seus serviços, produtos, eventos e promoções para
                        moradores e turistas em um só lugar.
                        </p>
                    </div>

                    <div className="testimonial">
                        <p className='phrase'>
                            "O jeito mais fácil de explorar nossa cidade. Onde comer, onde ficar, o que fazer? Tá no Made in Itarema!"
                        </p>
                        <div className="testimonial-info">
                            <img src="../src/assets/img/jp.png" alt="Usuário" className="profile-pic" />
                            <div>
                                <strong>João Pedro</strong>
                                <p className='role'>Desenvolvedor do Made in Itarema App</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="form-section">
                <h2>Saudações do Made in Itarema App! 📱</h2>
                <p>Preencha o formulário para cadastrar seu estabelecimento no maior aplicativo da região.</p>

                <div className='main-form'>
                    <CategorySelector onSelectCategoria={setCategoria} />
                    {renderForm()}
                </div>

                {/* <form>
                    <label>Email</label>
                    <input type="email" placeholder="m@example.com" />
        
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
        
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
        
                    <label>Company</label>
                    <input type="text" placeholder="Terra Capital" />
        
                    <label>Title</label>
                    <input type="text" placeholder="Managing Partner" disabled />
        
                    <div className="checkbox">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">I accept the terms and conditions</label>
                    </div>
        
                    <button type="submit">Sign In</button>
                </form> */}
            </div>
      </div>
    );
};

export default App;
