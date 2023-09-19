
import './App.css';
import React from 'react'; 


function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
            <h2 class="logo">Controle de Estoque</h2>            
        </div>
    </header>

    <main>
        <div class="menu-principal">
            <div class="container">
                <h3 class="titulo">MENUS</h3>
                <div class="botoes">
                    <button role="button" class="botao">
                        <i class="fa-solid fa-play"></i>
                        ASSISTIR AGORA
                    </button>
                    <button role="button" class="botao">
                        <i class="fa-solid fa-circle-info"></i>
                        MAIS INFORMAÇÕES
                    </button>
                </div>
            </div>            
        </div>
    </main>

    </div>
  );
}

export default App;
