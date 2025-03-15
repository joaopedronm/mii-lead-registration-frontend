import './App.css';
import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import PousadasForm from './components/PousadasForm';
import RestaurantsForm from './components/RestaurantsForm';
import GroupHousesForm from './components/GroupHousesForm';
import BarsForm from './components/BarsForms';
import PizzariasForm from './components/PizzariasForm';
import EspetinhosForm from './components/Espetinhos';
import AcaiForm from './components/AcaiForm';
import DeliverysForm from './components/DeliverysForm';
import KiteSchoolsForm from './components/KiteSchoolsForm';
import GymsForm from './components/GymsForm';
import SportsArenaForm from './components/SportsArenaForm';
import PersonalTrainerForm from './components/PersonalTrainerForm';
import PharmacyForm from './components/PharmacyForm';
import ClinicasForm from './components/ClinicasForm';
import MassagemForm from './components/MassagemForm';
import { AiOutlineWhatsApp } from "react-icons/ai";
import LoadingMessage from './components/LoadingMessage';

const ConfirmationMessage = ({ setSubmitted, setCategoria }) => (
    <div className="confirmation">
        <h2>Formulário enviado com sucesso! ✅</h2>
        <p>Seu estabelecimento foi cadastrado e <b>estará no aplicativo do Made in Itarema em até 24 horas</b>. Entraremos em contato para solicitar a última etapa do cadastro, as fotos.</p>
        <p>Caso deseje cadastrar um novo estabelecimento, clique no botão abaixo.</p>

        <button
            onClick={() => {
                setSubmitted(false);
                setCategoria('');
            }}
        >
            Cadastrar um novo estabelecimento
        </button>

        <div className='contact'>
            <AiOutlineWhatsApp className='icon' />
            <p>Contato para dúvidas: (88) 98824 - 2039</p>
        </div>
    </div>
);

const ErrorMessage = ({ errorMessage, setError, setCategoria }) => (
    <div className="error-message">
        <h2>Ocorreu um erro ❌</h2>
        <p>{errorMessage}</p>
        <button onClick={() => {
            setError(null)
            setCategoria('')
        }}>
            Tentar novamente
        </button>
    </div>
);

const App = () => {
    const [categoria, setCategoria] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (dados) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/send-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            if (!response.ok) {
                throw new Error('Ocorreu um erro ao enviar o formulário. Tente novamente.');
            }

            await response.json();
            setSubmitted(true);
        } catch (error) {
            console.error('Erro:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const renderForm = () => {
        switch (categoria) {
            case 'pousadas':
                return <PousadasForm onSubmit={handleSubmit} />;
            case 'restaurantes':
                return <RestaurantsForm onSubmit={handleSubmit} />;
            case 'casasGrupo':
                return <GroupHousesForm onSubmit={handleSubmit} />;
            case 'bares':
                return <BarsForm onSubmit={handleSubmit} />;
            case 'pizzarias':
                return <PizzariasForm onSubmit={handleSubmit} />;
            case 'espetinhos':
                return <EspetinhosForm onSubmit={handleSubmit} />;
            case 'acais':
                return <AcaiForm onSubmit={handleSubmit} />;
            case 'deliverys':
                return <DeliverysForm onSubmit={handleSubmit} />;
            case 'kiteSchools':
                return <KiteSchoolsForm onSubmit={handleSubmit} />;
            case 'academias':
                return <GymsForm onSubmit={handleSubmit} />;
            case 'arenas':
                return <SportsArenaForm onSubmit={handleSubmit} />;
            case 'personal':
                return <PersonalTrainerForm onSubmit={handleSubmit} />;
            case 'farmacias':
                return <PharmacyForm onSubmit={handleSubmit} />;
            case 'clinicas':
                return <ClinicasForm onSubmit={handleSubmit} />;
            case 'massagem':
                return <MassagemForm onSubmit={handleSubmit} />;
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
                {submitted ? (
                    <ConfirmationMessage setSubmitted={setSubmitted} setCategoria={setCategoria} />
                ) : error ? (
                    <ErrorMessage errorMessage={error} setError={setError} setCategoria={setCategoria} />
                ) : (
                    <>
                        <h2>Saudações do Made in Itarema App! 📱</h2>
                        <p>Preencha o formulário para cadastrar seu estabelecimento no maior aplicativo da região.</p>
                        <div className='main-form'>
                            <CategorySelector onSelectCategoria={setCategoria} />
                            {loading ? <LoadingMessage /> : renderForm()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default App;
