import React from 'react';
import ReactDOM from 'react-dom';
import RestAPIContext from "./ContextAPI/ContextAPI";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {config} from 'dotenv';
import APIHelper from "./Helpers/APIHelper";

config({path: "/"});

ReactDOM.render(
    <React.StrictMode>
        <RestAPIContext.Provider value={APIHelper}>
            <App/>
        </RestAPIContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
