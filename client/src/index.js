import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Vektoren from "./pages/Vektoren";
import EnergieStromerzeugung from "./pages/energie-stromerzeugung/containers/NavItems/NavItems";
import Klima from "./pages/Klima";
import Linearegleichungen from "./pages/Linearegleichungen";
import AM from "./pages/lineareGleichungenSubPages/am";
import SUBM from "./pages/lineareGleichungenSubPages/subm";
import Energie from "./pages/Energie";
import Kuehlschrank from "./pages/Kuehlschrank";
import LineareFunktionen from "./pages/LineareFunktionen";
import {Kernkraftwerk} from "./pages/energie-stromerzeugung/energie-components/Kernkraftwerk/Kernkraftwerk";
import {Solar} from "./pages/energie-stromerzeugung/energie-components/Solar/Solar";
import {Wasserkraftwerk} from "./pages/energie-stromerzeugung/energie-components/Wasserkraftwerk/Wasserkraftwerk";
import {Generator} from "./pages/energie-stromerzeugung/energie-components/Generator/Generator";
import Home from "./pages/energie-stromerzeugung/energie-components/Home/Home";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>

                <Route path="/vektoren" element={<Vektoren/>}/>

                <Route path="/energie-stromerzeugung/" element={<Home/>}/>
                {/*<Route path="/energie-stromerzeugung/kernkraftwerk" element={<Kernkraftwerk/>}/>*/}
                {/*<Route path="/energie-stromerzeugung/solar" element={<Solar/>}/>*/}
                {/*<Route path="/energie-stromerzeugung/wasserkraftwerk" element={<Wasserkraftwerk/>}/>*/}
                {/*<Route path="/energie-stromerzeugung/generator" element={<Generator/>}/>*/}
                {/*<Route path="/energie-stromerzeugung/home" element={<Home/>}/>*/}

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