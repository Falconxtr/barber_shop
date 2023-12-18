import React from "react";
import './App.css';

import Topo from './componentes/topo';
import Conteudo from "./componentes/conteudo";

function App() {
  return(
    <section>
      <Topo />
      <Conteudo />
    </section>
  );
}

export default App;