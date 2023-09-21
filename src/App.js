
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

      <body>
        <div class="menu-principal">
          <div class="container">
              <h3 class="titulo">MENUS</h3>
          </div>
        </div>

        <div class="menu-principal">
          <div class="container">
                <MyComponent />
          </div>
        </div>
      </body>
      
    </div>
       
  );  
}

export default App;
