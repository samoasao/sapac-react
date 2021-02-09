import React from 'react';
import ReactDOM from 'react-dom';

const num:number = 5;
ReactDOM.render(
    <React.StrictMode>
        <h1>Hello there {num}</h1>
    </React.StrictMode>,
    document.getElementById('root')
)