import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StyledDynamic from "./chap05/styledJSX/StyledDynamic";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <h3>Styled JSX의 외부화</h3>
        <StyledDynamic theme={
            {
                radius: true,
                color: 'royalblue'
            }
        } />
    </>
);

reportWebVitals();
