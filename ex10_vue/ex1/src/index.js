import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <div>
    <Header />
    <App />
    </div>
);

