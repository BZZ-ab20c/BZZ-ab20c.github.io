import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Vektoren from "./pages/Vektoren";
import EnergieStromerzeugung from "./pages/Energie-stromerzeugung";
import Klima from "./pages/Klima";
import Linearegleichungen from "./pages/Linearegleichungen";
import AM from "./pages/lineareGleichungenSubPages/am";
import SUBM from "./pages/lineareGleichungenSubPages/subm";
import Energie from "./pages/Energie";
import Kuehlschrank from "./pages/Kuehlschrank";
import LineareFunktionen from "./pages/LineareFunktionen";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>

                <Route path="/vektoren" element={<Vektoren/>}/>

                <Route path="/energie-stromerzeugung" element={<EnergieStromerzeugung/>}/>

                <Route path="/klima" element={<Klima/>}/>

                <Route path="/linearegeleichungen" element={<Linearegleichungen/>}/>
                <Route path="/linearegeleichungen/AM" element={<AM/>}/>
                <Route path="/linearegeleichungen/SUBM" element={<SUBM/>}/>

                <Route path="/linearefunktionen" element={<LineareFunktionen/>}/>

                <Route path="/energie" element={<Energie/>}/>

                <Route path="/kuehlschrank" element={<Kuehlschrank/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);