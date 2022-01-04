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

const Navigation = () => {
    return (
        <div>
            <div className="navBar">Ich bin Navigation</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/vektoren'>Vektoren</Link></li>
                <li><Link to='/klima'>Klima</Link></li>
                <li><Link to='/energie-stromerzeugung/'>Energie-Stromerzeugung</Link></li>
                <li><Link to='/linearegeleichungen'>Linearegleichungen</Link></li>
                <li><Link to='/linearefunktionen'>Linearefunktionen</Link></li>
                <li><Link to='/energie'>Energie</Link></li>
                <li><Link to='/kuehlschrank'>Kühlschrank</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/vektoren" element={<Vektoren/>}/>

                <Route path="/klima" element={<Klima/>}/>

                <Route path="/energie-stromerzeugung/*" element={<NavItems/>}/>

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
