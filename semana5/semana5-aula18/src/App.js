import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import location from './Img/location.png'
import mail from './Img/mail.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="" 
          nome="Vitor de Farias Metzner" 
          descricao="Gosto muito da minha paixão e habilidades em empregar empresas e
          projetos para ser mais notável. Acredito que posso causar um impacto criando
          conteúdo inovador, construindo pontes sólidas "
        />
        <CardPequeno
          imagem={mail}
          texto="contato.vitorfariass@gmail.com"
        />
        <CardPequeno
          imagem={location}
          texto="Rua Maria Julia da Luz ,1212"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="" 
          nome="Massa Viva – Recepcionista" 
          descricao="Admissão:01/02/2016 ~ Afastamento:01/08/2016       " 
        />
        <CardPequeno
          imagem={location}
          texto="Florianópolis"
        />
        <CardGrande 
          imagem="" 
          nome="Detran – Recepcionista de veículos" 
          descricao="Admissão:05/03/2018  ~ Afastamento:02/06/2018" 
        />
        <CardPequeno
          imagem={location}
          texto="São José"
        />
        <CardGrande 
          imagem="" 
          nome="Cobrador de Onibus" 
          descricao="Admissão:20/08/2018 ~ Atualmente colocado de licença" 
        />
        <CardPequeno
          imagem={location}
          texto="São José"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
