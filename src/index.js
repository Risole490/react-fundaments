import React from 'react'; // O uso do React é obrigatório em todos os arquivos que contém JSX
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

import App from './components/App'; // Importando o componente App

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
