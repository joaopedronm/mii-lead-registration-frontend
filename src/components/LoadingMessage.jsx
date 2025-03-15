import React, { useState, useEffect } from 'react';
import './LoadingMessage.css'
import { dotSpinner } from 'ldrs'

dotSpinner.register()

const curiosidades = [
  "O Made in Itarema é o primeiro app dedicado exclusivamente ao turismo e comércio local da cidade!",
  "Itarema atrai turistas do mundo todo com suas praias e esportes aquáticos, como o kitesurf.",
  "O turismo digital tem crescido em Itarema, ajudando visitantes a descobrirem experiências únicas pelo celular.",
  "Negócios cadastrados no Made in Itarema podem ser encontrados por turistas em poucos cliques!",
  "Ter uma presença digital forte pode aumentar a visibilidade do seu negócio e atrair mais clientes!",
];

const LoadingMessage = () => {
    const [curiosidadeIndex, setCuriosidadeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCuriosidadeIndex((prevIndex) => (prevIndex + 1) % curiosidades.length);
        }, 5000); // Troca a cada 10 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <div className="loading-container">
            <p>Estamos processando seu cadastro, por favor, aguarde...</p>
            <div className='loading-icon'>
              <l-dot-spinner
                size="40"
                speed="0.9" 
                color="#ff8214"
              ></l-dot-spinner>
            </div>
            <div className="curiosidade">
                <p><b>Você sabia?</b></p>
                <p>{curiosidades[curiosidadeIndex]}</p>
            </div>
        </div>
    );
};

export default LoadingMessage;
