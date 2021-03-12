import React from 'react';
import Header from './Components/Header';
import Formation from './Components/Formation';
import aboutimage from './images/formation.png';
import Skills from './Components/Skills';
import contact from './images/contact.png';
function App() {
  return (
    <div className="App">
      <Header />
      <Formation
        image={aboutimage}
        title='FORMAÇÃO'
        text='Bacharelado em Sistemas de
              Informação em 2019/2, pela Universidade Federal do
              Amazonas - UFAM'
      />
      <Skills />
      <Formation
        image={contact}
        title='Contato'
        text='ketlen.t.sampaio@gmail.com' />
    </div>
  );
}

export default App;
