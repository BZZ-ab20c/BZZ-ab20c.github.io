import 'bootstrap/dist/css/bootstrap.min.css';
import ClimateChange from "../img/klima/climate-change.png";
import useDocumentTitle from "../utils/UseDocumentTitle";

const Vektoren = () => {
    useDocumentTitle('Vektoren');

    return (
        <div className={"container"}>
            <div className="container d-flex justify-content-center" style={{padding: '24px'}}>
                <h1>Klima</h1>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="myCard" id="wasSindVektoren">
                        <div className="container">
                            <h3><b>Was ist ein Vektor?</b></h3>
                        </div>

                        <div className="container">
                            <p>Das Klima ist das langfristige Muster des Wetters in einem Gebiet, typischerweise
                                gemittelt über einen Zeitraum von 30 Jahren. <br/>Genauer gesagt, ist es der Mittelwert
                                und die Variabilität der meteorologischen Variablen über einen Zeitraum von
                                Monaten bis zu Millionen von Jahren.</p>
                            <p>Klima beschreibt, wie das Wetter über einen langen Zeitraum aussieht.
                                <br/>Wenn es in einer Gegend über viele Jahre regnet, spricht man von einem feuchten
                                Klima.
                                <br/>Wenn die Temperaturen sich über viele Jahre verändern, spricht man vom
                                Klimawandel.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="myCard">
                        <div className="container">
                            <h4>Inhalt</h4>
                        </div>
                        <ul className="cardList">
                            <a href="#wasSindVektoren">
                                <li className="listPadding">
                                    <span style={{fontSize: '18px'}}>Was sind Vektoren?</span><br/>
                                </li>
                            </a>
                        </ul>
                    </div>

                    <img src={ClimateChange} alt="climate-change" style={{width: '72%', margin: '10px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Vektoren;