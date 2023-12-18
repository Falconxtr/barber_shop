import React, { useState } from "react";
import './style.css';

import Logo from "../../assets/barbearia-logo.png";
import Lua from "../../assets/moon.png";

export default function Topo() {
    const corDeFundoBranco = 'modoclaro';
    const corDefundoPreto = 'modoescuro';

    const [novaCor, setNovaCor] = useState(corDeFundoBranco);

    const alterarCor = () => {
        if (novaCor === corDeFundoBranco) {
            setNovaCor(corDefundoPreto)
        } else {
            setNovaCor(corDeFundoBranco)
        }
    };

    return(
        <section className={novaCor}>
            <div className="limita-secao secao-topo">
                <img className="logo" src={ Logo } alt="Barbearia Logo" />
                <button onClick={alterarCor} className={novaCor}>
                    <img src={ Lua } alt="Dark Mode" />
                    <p>Dark</p>
                </button>
            </div>
        </section>
    );
}