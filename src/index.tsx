import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/main.css'

import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/">
            <ScrollToTop>
            <App />
            </ScrollToTop>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)