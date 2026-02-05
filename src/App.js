import React from 'react';
import './App.css';
import miFotoLocal from './yo.jpeg';

function App() {
  return (
    <div className="main-container">
      <div className="content-box">
        
        <img src={miFotoLocal} alt="Avatar" className="avatar-img" />

        <h1 className="title">Evaluación parcial 1</h1>
        
        <h2 className="subtitle">Alumno(a): Diego Rodriguez Nuñez</h2>

        <div className="links-container">
          <a 
            href="https://www.linkedin.com/in/rodriguez-diego-845b213a4/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-text"
          >
            LINKED IN DE MI PROFILE
          </a>

          <a 
            href="/documentacion.html" 
            className="link-text"
          >
            DOCUMENTACION PARCIAL 1
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;