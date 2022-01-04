import {Link, Route, Routes} from "react-router-dom";
import Vektoren from "../pages/Vektoren";
import NavItems from "../pages/energie-stromerzeugung/containers/NavItems/NavItems";
import Klima from "../pages/Klima";
import Linearegleichungen from "../pages/Linearegleichungen";
import AM from "../pages/lineareGleichungenSubPages/am";
import SUBM from "../pages/lineareGleichungenSubPages/subm";
import LineareFunktionen from "../pages/LineareFunktionen";
import Energie from "../pages/Energie";
import Kuehlschrank from "../pages/Kuehlschrank";
import Home from "../pages/energie-stromerzeugung/energie-components/Home/Home";
import {Kernkraftwerk} from "../pages/energie-stromerzeugung/energie-components/Kernkraftwerk/Kernkraftwerk";
import {Solar} from "../pages/energie-stromerzeugung/energie-components/Solar/Solar";
import {Wasserkraftwerk} from "../pages/energie-stromerzeugung/energie-components/Wasserkraftwerk/Wasserkraftwerk";
import {Generator} from "../pages/energie-stromerzeugung/energie-components/Generator/Generator";
import "../pages/energie-stromerzeugung/containers/NavItems/NavItems.css";

const Navigation = () => {
    return (
        <div>
            <div className="Blog">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/vektoren'>Vektoren</Link></li>
                        <li><Link to='/klima'>Klima</Link></li>
                        <li><Link to='/energie-stromerzeugung/home/'>Energie-Stromerzeugung</Link></li>
                        <li><Link to='/linearegeleichungen'>Linearegleichungen</Link></li>
                        <li><Link to='/linearefunktionen'>Linearefunktionen</Link></li>
                        <li><Link to='/energie'>Energie</Link></li>
                        <li><Link to='/kuehlschrank'>Kühlschrank</Link></li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/vektoren" element={<Vektoren/>}/>

                <Route path="/klima" element={<Klima/>}/>

                <Route path="/energie-stromerzeugung/*" element={<NavItems/>}>
                    <Route path="home/" element={<Home/>}/>
                    <Route path="kernkraftwerk/" element={<Kernkraftwerk/>}/>
                    <Route path="solar/" element={<Solar/>}/>
                    <Route path="wasserkraftwerk/" element={<Wasserkraftwerk/>}/>
                    <Route path="generator/" element={<Generator/>}/>
                </Route>

                <Route path="/linearegeleichungen" element={<Linearegleichungen/>}/>
                <Route path="/linearegeleichungen/AM" element={<AM/>}/>
                <Route path="/linearegeleichungen/SUBM" element={<SUBM/>}/>

                <Route path="/linearefunktionen" element={<LineareFunktionen/>}/>

                <Route path="/energie" element={<Energie/>}/>

                <Route path="/kuehlschrank" element={<Kuehlschrank/>}/>
            </Routes>
        </div>
    );
}

export default Navigation;
