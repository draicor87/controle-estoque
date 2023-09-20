import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MeuComponente = () => {
  const estiloDoContainer = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={estiloDoContainer}>
      <div style={{ width: '50%', backgroundColor: 'red' }}>
        {<button type="button" class="btn btn-outline-secondary">Secondary</button>}
      </div>
      <div style={{ width: '50%', backgroundColor: 'blue' }}>
        {<button type="button" class="btn btn-outline-secondary">Secondary</button>}
      </div>
    </div>
  );
};

export default MeuComponente;