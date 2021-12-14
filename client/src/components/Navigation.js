import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div className="navBar">Ich bin Navigation</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Vektoren'>Vektoren</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;