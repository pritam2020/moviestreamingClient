import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Home from './pages/Home.js';
import Streaming from './pages/Streamming.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, (err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
