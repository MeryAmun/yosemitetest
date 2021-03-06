import * as serviceWorker from './serviceWorker';

import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';

import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
