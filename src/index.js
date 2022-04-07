import { ChakraProvider } from '@chakra-ui/react';
import { App } from 'App';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(
    document.getElementById("app")
)

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)