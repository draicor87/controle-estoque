
import './App.css';
import React from 'react'; 
import MyComponent from './App.jsx';
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


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
          <div class="container rounded">
                <MyComponent />
          </div>
        </div>
      </body>
      
    </div>
       
  );  
}

export default App;
