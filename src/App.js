
import './App.css';
import React from 'react'; 
import MyComponent from './App.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
            <h2 class="logo">Controle de Estoque</h2>            
        </div>
    </header>

    
    <div class="menu-principal">
        <div class="container">
            <h3 class="titulo">MENUS</h3>
                <MyComponent />
            </div>
        </div>            
    </div>
       
  );  
}

export default App;
