import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorEventRoot from "./chap05/errorBoundary/ErrorEventRoot";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ErrorEventRoot />
);

reportWebVitals();
