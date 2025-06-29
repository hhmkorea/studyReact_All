// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {CssBaseline} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* React-Router-Dom : 페이지 이동 */}
            <App/>
            <CssBaseline />
        </BrowserRouter>
    </React.StrictMode>
);
