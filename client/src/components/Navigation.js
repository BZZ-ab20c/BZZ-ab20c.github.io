import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="navBar">Ich bin Navigation</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Vektoren'>Vektoren</Link></li>
                <li><Link to='/klima'>Klima</Link></li>
                <li><Link to='/energie-stromerzeugung'>Energie-Stromerzeugung</Link></li>
                <li><Link to='/lineregeleichungen'>Linearegleichungen</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;
