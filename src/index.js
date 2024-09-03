import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { TodoContextProvider } from './context/TodoContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

