import Navigation from "../components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClimateChange from "../img/klima/climate-change.png";

const Vektoren = () => {
    return (
        <div className={"container"}>
            <Navigation/>
            <div className="container d-flex justify-content-center" style={{padding: '24px'}}>
                <h1>Klima</h1>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="myCard" id="wasIstKlima">
                        <div className="container">
                            <h3><b>Was ist Klima?</b></h3>
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

                    <div className="myCard" id="natürlicheÄnderungen">
                        <div className="container">
                            <h3><b>Natürliche Änderungen</b></h3>
                        </div>

                        <div className="container">
                            <p>Das Klima ist das langfristige Muster des Wetters in einem Gebiet, typischerweise
                                gemittelt über einen Zeitraum von 30 Jahren. <br/>Genauer gesagt, ist es der
                                Mittelwert
                                und die Variabilität der meteorologischen Variablen über einen Zeitraum von
                                Monaten bis zu Millionen von Jahren.</p>
                            <p>Klima beschreibt, wie das Wetter über einen langen Zeitraum aussieht.
                                <br/>Wenn es in einer Gegend über viele Jahre regnet, spricht man von einem feuchten
                                Klima.
                                <br/>Wenn die Temperaturen sich über viele Jahre verändern, spricht man vom
                                Klimawandel.</p>
                        </div>
                    </div>

                    <div className="myCard" id="menschlicheÄnderungen">
                        <div className="container">
                            <h3><b>Menschliche Änderungen</b></h3>
                        </div>

                        <div className="container">
                            <p>Das Klima ist das langfristige Muster des Wetters in einem Gebiet, typischerweise
                                gemittelt über einen Zeitraum von 30 Jahren. <br/>Genauer gesagt, ist es der
                                Mittelwert
                                und die Variabilität der meteorologischen Variablen über einen Zeitraum von
                                Monaten bis zu Millionen von Jahren.</p>
                            <p>Klima beschreibt, wie das Wetter über einen langen Zeitraum aussieht.
                                <br/>Wenn es in einer Gegend über viele Jahre regnet, spricht man von einem
                                feuchten Klima.
                                <br/>Wenn die Temperaturen sich über viele Jahre verändern, spricht man vom
                                Klimawandel.</p>
                        </div>
                    </div>

                    <div className="myCard" id="klimaWandel">
                        <div className="container">
                            <h3><b>Klima Wandel</b></h3>
                        </div>

                        <div className="container">
                            <p>Der Klimawandel beschreibt eine Veränderung der durchschnittlichen
                                Bedingungen - wie Temperatur
                                und Niederschlag - in einer Region über einen längeren Zeitraum hinweg.<br/>
                                NASA-Wissenschaftler haben beobachtet, dass sich die Erdoberfläche
                                erwärmt, und viele der
                                wärmsten Jahre seit Beginn der Aufzeichnungen fanden in den letzten 20
                                Jahren statt.</p>
                            <h5>Treibhauseffekt</h5>
                            <p style={{fontWeight: 'bold'}}>Kurz definiert:</p>
                            <p>Der Treibhauseffekt ist wenn Gase in der Erdatmosphäre die Wärme der Sonne
                                einfangen.
                                <br/>Durch diesen Prozess wird die Erde viel wärmer, als sie es ohne
                                Atmosphäre wäre.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="myCard">
                        <div className="container">
                            <h4>Inhalt</h4>
                        </div>
                        <ul className="cardList">
                            <a href="#wasIstKlima">
                                <li className="listPadding">
                                    <span style={{fontSize: '18px'}}>Was ist Klima?</span><br/>
                                </li>
                            </a>
                            <a href="#natürlicheÄnderungen">
                                <li className="listPadding">
                                    <span style={{fontSize: '18px'}}>Natürliche Änderungen</span><br/>
                                </li>
                            </a>
                            <a href="#menschlicheÄnderungen">
                                <li className="listPadding">
                                    <span style={{fontSize: '18px'}}>Menschliche Änderungen</span><br/>
                                </li>
                            </a>
                            <a href="#klimaWandel">
                                <li className="listPadding">
                                    <span style={{fontSize: '18px'}}>Klima Wandel</span><br/>
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