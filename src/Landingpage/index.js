import React, { useState } from "react";
import './style.css';

import Logo from "../assets/barbearia-logo.png";
import Lua from "../assets/moon.png";
import Sol from "../assets/sun.png";

export default function LadingPage() {
    const [novaCor, setNovaCor] = useState(true);

    const alterarCor = () => {
        setNovaCor(!novaCor);
    }
    
    return(
        <section className={novaCor ? 'modoclaro' : 'modoescuro'}>
            <header className="limita-secao secao-topo">
                <img className="logo" src={ Logo } alt="Barbearia Logo" />
                <button onClick={alterarCor} className={novaCor ? 'modoclaro' : 'modoescuro'}>
                    <img src={ novaCor ? Lua : Sol } alt="Dark Mode" />
                    {novaCor ? `Dark` : `Light`}
                </button>
            </header>

            <section>
                <div className="banner">
                </div>
                <div className="limita-secao secao-conteudo">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className="paragrafo1"><spam>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</spam></p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p className="assinatura">S. Kelly</p>
                </div>
            </section>
        </section>
    );
}