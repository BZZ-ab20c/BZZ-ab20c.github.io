import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/klima/style.css'
import ClimateChange from "../img/klima/climate-change.png";
import GreenHouseEffect from "../img/klima/greenHouseEffect.png";
import WaterCurrent from "../img/klima/waterCurrent.jpg";
import Orbit from "../img/klima/orbit.jpg";
import useDocumentTitle from "../utils/UseDocumentTitle";

const Klima = () => {
    useDocumentTitle('Klima');

    return (
        <div className="container">
            {/*Grid*/}
            <div className="container d-flex justify-content-center" style={{padding: '24px'}}>
                <h1>Klima</h1>
            </div>
            <div className="row">

                <div className="col-8" style={{textAlign: 'left !important'}}>

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
                            <br/>
                        </div>
                    </div>
                    <hr/>

                    <div className="myCard" id="natürlicheÄnderungen">
                        <div className="container">
                            <h3><b>Natürliche Änderungen</b></h3>
                        </div>

                        <div className="container">
                            <p>Unser Klima ändert sich regelmässig
                                In den letzten 20 Jahren hat sich das Klima drastisch verändert,
                                und das ist vor allem auf den Menschen zurückzuführen.
                                Aber es sind nicht nur die Menschen, die sich auf den Wandel auswirken.
                                Es gibt auch natürliche Ursachen für den Klimawandel</p>
                            <h5>Beispiele</h5>
                            <p style={{fontWeight: 'bold'}}>Vulkanische Eruptionen:</p>
                            <p>
                                Vulkanausbrüche verursachen eine so genannte "kurzfristige Abkühlung".
                                Sie stossen Aschewolken aus, die einen Teil des Sonnenlichts abhalten.
                                Vulkanausbrüche verursachen eine so genannte "kurzfristige Abkühlung".
                                Sie stossen Aschewolken aus, die einen Teil des Sonnenlichts abhalten.
                                <br/>Vulkantrümmer enthalten auch Schwefeldioxid,
                                das in Verbindung mit Wasserdampf und Staub in der Atmosphäre Sulfataerosole bildet.
                                Sulfataerosole reflektieren das Sonnenlicht und sind leichter als Asche.
                                Das bedeutet, dass sie mehr als ein Jahr lang in der Atmosphäre bleiben können.
                                <br/>
                                Der Mount Pinatubo verursachte 1991 einen Rückgang der globalen Temperatur um 0,5 °C.
                            </p>
                            <p style={{fontWeight: 'bold'}}>Meeresströmungen:</p>
                            <p>Die Meeresströmungen haben ein "globales Förderband", das im Grunde ein großer Strom ist,
                                der durch die Ozeane fließt. Er umläuft den Globus in einem Zyklus von 1000 Jahren.
                                <br/>
                                Diese Zirkulation ist das Ergebnis von zwei
                                gleichzeitig ablaufenden Prozesse: warme Oberflächenströme, die weniger dichtes Wasser
                                vom Äquator in Richtung der Pole und kalte Tiefseeströmungen, die
                                die dichteres Wasser von den Polen weg in Richtung Äquator transportieren.
                                Dies spielt eine wichtige Rolle bei der Verteilung der Wärmeenergie,
                                Regulierung von Wetter und Klima
                            </p>
                            <p style={{fontWeight: 'bold'}}>Änderungen in der Erdumlaufbahn:</p>
                            <p>Kleine Verschiebungen in der Erdumlaufbahn können Klimaveränderungen auslösen,
                                wie zum Beispiel den Beginn und das Ende von Eiszeiten
                                Orbitale Veränderungen sind so allmählich, dass sie sich nur über
                                Tausende von Jahren bemerkbar sind - nicht Jahrzehnte oder Jahrhunderte.
                            <br/>
                                Die Erde umkreist die Sonne jedes Jahr einmal vollständig. Sie
                                ist in einem Winkel von 23,5° zur senkrechten Ebene ihrer Bahn.
                                Änderungen der Winkel können zu kleinen, aber klimatisch wichtigen Veränderungen führen
                            <br/>
                            <br/>
                                Beispiel: die Kraft der Jahreszeiten. Mehr Winkel bedeutet wärmere Sommer und kältere Winter;
                                weniger Neigung bedeutet kühlere Sommer und mildere Winter
                            </p>
                            <br/>
                        </div>
                    </div>
                    <hr/>
                    <div className="myCard" id="menschlicheÄnderungen">
                        <div className="container">
                            <h3><b>Menschliche Änderungen</b></h3>
                        </div>

                        <div className="container">
                            <p>Der Mensch verursacht den Klimawandel durch die Freisetzung von Kohlendioxid und anderen
                                Treibhausgasen in die Luft. Heute befindet sich mehr Kohlendioxid in der Atmosphäre als
                                jemals zuvor in den letzten 2 Millionen Jahren. Im 20. und 21. Jahrhundert ist der
                                Kohlendioxidgehalt um 40 % gestiegen.

                                Wir erzeugen Treibhausgase auf viele verschiedene Arten:</p>
                            <p style={{fontWeight: 'bold'}}>Verbrennung fossiler Brennstoffe:</p>
                            <p>Fossile Brennstoffe wie Öl, Gas und Kohle enthalten Kohlendioxid,
                                das seit Tausenden von Jahren im Boden "eingeschlossen" ist.
                                Wenn wir diese aus dem Boden holen und verbrennen, setzen wir das gespeicherte
                                Kohlendioxid in die Luft frei.
                            <br/>Die Nutzung fossiler Brennstoffe ist auch eine Bedrohung für die Tier- und Pflanzenwelt
                                und die umliegende Umwelt, da sie aufgrund ihrer Toxizität die Pflanzenwelt abtötet und
                                Gebiete unbewohnbar macht.</p>
                            <p style={{fontWeight: 'bold'}}>Abholzung:</p>
                            <p>
                                Abholzung wird gemacht für Holz, Platz für landwirtschaftliche Betriebe etc... <br/>
                                Wie wir schon wissen, Bäume wandeln Kohlendioxid in Sauerstoff und wenn wir sie abholzen
                                steigt das Kohlendioxid schneller an, da es weniger Bäume gibt, die es absorbieren.
                                Und wenn wir Bäume verbrennen, setzen sie die gespeicherten Kohlenstoff frei!
                            </p>
                            <p style={{fontWeight: 'bold'}}>Fahrzeuge:</p>
                            <p>
                                Autos, Flugzeugen, Schiffen und Zügen sind die meist gebrauchte Fahrzeuge. Die meisten
                                werden mit fossilen Brennstoffen betrieben.
                                Bei der Verbrennung fossiler Brennstoffe werden Kohlenstoff und andere Arten von
                                Schadstoffen in die Atmosphäre freigesetzt. Aber dies kann durch Elektrofahrzeugen
                                verringert werden

                            </p>
                            <br/>
                        </div>
                    </div>
                    <hr/>

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
                                Atmosphäre wäre. (Bild Rechts)</p>
                            <br/>
                            <p>1) Die Sonnenstrahlung erreicht die Erdatmosphäre - ein Teil davon wird in den Weltraum
                                zurückgeworfen.</p>
                            <p>2) Der Rest der Sonnenenergie wird vom Land und den Ozeanen absorbiert und erwärmt die Erde.</p>
                            <p>3) Wärme strahlt von der Erde in den Weltraum.</p>
                            <p>4) Ein Teil dieser Strahlungswärme wird von den Treibhausgasen in der Atmosphäre
                                aufgefangen und hält die Erde warm genug, um Leben zu ermöglichen.</p>
                            <p>5) Menschliche Aktivitäten wie die Verbrennung fossiler Brennstoffe, Landwirtschaft und
                                Landrodung erhöhen die Menge der in die Atmosphäre abgegebenen Treibhausgase.</p>
                            <p>6) Dadurch wird zusätzliche Wärme eingeschlossen und die Temperatur der Erde steigt an.</p>
                        </div>
                    </div>
                    <hr/>
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
                            <br/>
                        </ul>
                    </div>
                    <div className="myCard">
                        <img src={ClimateChange} alt="climate-change" style={{width: '72%', margin: '10px'}}/>
                        <div style={{height: '50px'}}/>
                        <p>Meeresströmungen:</p>
                        <img src={WaterCurrent} alt="Conveyor Belt" style={{width: '80%', margin: '10px'}}/>
                        <p>Erdwinkel:</p>
                        <img src={Orbit} alt="ErdWinkel" style={{width: '60%', margin: '10px'}}/>

                        <div style={{height: '1000px'}}/>
                        <p>Treibhauseffekt:</p>
                        <img src={GreenHouseEffect} alt="Treibhauseffekt" style={{width: '100%', margin: '10px'}}/>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default Klima;