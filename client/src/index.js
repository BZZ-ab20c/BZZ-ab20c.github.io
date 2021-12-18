import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Vektoren from "./pages/Vektoren";
import EnergieStromerzeugung from "./pages/Energie-stromerzeugung";
import Klima from "./pages/Klima";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/vektoren" element={<Vektoren/>}/>
                <Route path="/energie-stromerzeugung" element={<EnergieStromerzeugung/>}/>
                <Route path="/klima" element={<Klima/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);