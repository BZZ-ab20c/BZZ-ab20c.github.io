import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Kuehlschrank/KuehlschrankStyle.css'

import kuehlschrankZu from "../img/kuehlschrank/KühZuGesch.jpg";
import kuehlschrankOffen from "../img/kuehlschrank/KühOffGesch.jpg";
import imagineSelberZeichne from "../img/kuehlschrank/ImagineSelberZeichne.png";
import eishaus from "../img/kuehlschrank/Eishaus.jpg";
import aufbau from "../img/kuehlschrank/Aufbau.jpg";
import kuehlzone from "../img/kuehlschrank/kühlzone.png";
import ammoniak from "../img/kuehlschrank/ammoniak.png";
import kuehlschrank1930 from "../img/kuehlschrank/Kühlschrank1930.jpg";
import isobutan from '../img/kuehlschrank/Isobutan.png'
import emptyRoom from '../img/kuehlschrank/emptyRoom.png'
import temperaturMesser from '../img/kuehlschrank/TemperaturMesser.gif'
import useDocumentTitle from "../utils/UseDocumentTitle";


const Kuehlschrank = () => {
    useDocumentTitle('Kühlschrank');

    const [fridgeClosed, setFridgeClosed] = useState(true);
    const toggleFridge = () => {
        // fridgeClosed
        if (fridgeClosed) {
            document.getElementById('myImage').setAttribute('src', kuehlschrankOffen);
            document.getElementById('myImage').setAttribute('alt', 'Kühlschrank offen');

            document.getElementById("callContainer").style.display = 'block';
        } else {
            document.getElementById('myImage').setAttribute('src', kuehlschrankZu);
            document.getElementById('myImage').setAttribute('alt', 'Kühlschrank zu');

            document.getElementById("callContainer").style.display = 'none';
        }

        setFridgeClosed(!fridgeClosed);
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">

            <div className="title-section">
                <h1>Kühlschrank</h1>
            </div>

            <div className="parent">
                <h5>Historie</h5>
            </div>

            <div className="row">
                <div className="col-6">
                    <h5>500 V. CHR.</h5>
                    <p className="kuehlschrankP">Eine der ursprünglichsten Formen der Kühlung wurde
                        „Eishaus” genannt. Diese wurde häufig dazu verwendet,
                        Eis über das Jahr zu lagern, das aus nahe gelegenen Seen
                        und Flüssen gewonnen wurde. Hebräer, Griechen und Römer
                        waren zudem dafür bekannt, Schnee in Vorratsgruben einzusetzen.
                        Die Ägypter stellten ihre Gefässe über Nacht zum Kühlen nach draussen.</p>

                    <img src={eishaus} style={{height: "20%"}}
                         alt="eishaus"/>
                    <h5>1834</h5>
                    <p className="kuehlschrankP">Der amerikanische Erfinder Jacob Perkins, der zu dieser Zeit in London
                        lebte,
                        baute das weltweit erste funktionierende Dampfkompressionskühlsystem, bei
                        dem Ether in einem geschlossenen Kreislauf verwendet wurde. Sein Prototyp-System
                        arbeitete und war der erste Schritt zu modernen Kühlschränken, aber es hatte keinen
                        kommerziellen Erfolg.
                    </p>
                </div>
                <div className="col-6">
                    <h5>1871</h5>
                    <p className="kuehlschrankP"> 1871 entwarf Linde seine erste Kältemaschine. Seine Erfindung basiert
                        auf den
                        Gesetzen der Wärmelehre. Im Kühlschrank wird ein Kühl- oder Kältemittel durch
                        Metallröhren im Kreis gepumpt. Das Kühlmittel ist eine Flüssigkeit, die bei
                        normalem Druck schon bei niedrigen Temperaturen "kocht", also gasförmig wird.</p>
                    <h5>1930ER JAHRE</h5>
                    <p className="kuehlschrankP">
                        Bis 1929 haben Kühlschränke mit Dampfkompressionssystemen mehrere tödliche
                        Unfälle verursacht, als die giftigen Gase austraten. Es wurden Forschungen
                        zur Entwicklung einer weniger gefährlichen Kühlmethode angestrengt, die zur
                        Entdeckung von Freon führte, das zum Standard für fast alle Haushaltskühlgeräte wurde.
                        <br/>
                        Die Einführung von Freon spielte eine wichtige Rolle bei der Ausweitung
                        des Marktes für Kühlschränke.
                    </p>

                    <img src={kuehlschrank1930} style={{height: "20%"}}
                         alt="eishaus"/>

                    <h5>1970ER</h5>
                    <p className="kuehlschrankP">
                        Der Fokus wurde auf energieeffizientere Kühlschränke und auf die Beseitigung
                        von Fluorchlorkohlenwasserstoffe in geschlossenen Kühlsystemen gerichtet.
                        <br/>
                        in den 1970ern und 1980ern, als Freon eine Gefahr für die Ozonschicht darstellte,
                        wurde die Umwelt zur obersten Priorität.
                    </p>
                </div>
            </div>


            <div className="parent">
                <h5>Aufbau</h5>
            </div>

            <div className="parent">
                <p className="kuehlschrankP"> Ein Kühlschrank dient dazu, einen umschlossenen Raum, den Innenraum,
                    abzukühlen.
                    Sein Wirkprinzip entspricht dem der Wärmepumpe: Durch ein Arbeitsmittel wird durch
                    einen Verdampfer der Luft und den im Kühlschrank befindlichen Lebensmitteln Wärme
                    entzogen. ... Sein Wirkprinzip entspricht dem der Wärmepumpe.
                </p>
                <img src={aufbau} style={{height: "20%"}}
                     alt="eishaus"/>

            </div>

            <br/>
            <br/>
            <br/>

            <div className="parent">
                <h5>Funktion</h5>
            </div>

            <div className="row">
                <div className="col-6">
                    <p className="kuehlschrankP">1. An der inneren Rückwand des Kühlschrankes befindet sich
                        ein
                        schlangenförmiges Rohr, das von unten nach oben verläuft.
                        Darin
                        befindet sich die Kühlflüssigkeit. (Blau)
                    </p>
                    <p className="kuehlschrankP">2. Sobald im Kühlschrank Wärme entsteht, wird die
                        Kühlflüssigkeit
                        ebenfalls wärmer, erreicht den Siedepunkt und verdampft. Der
                        Dampf steigt im Rohr nach oben.
                    </p>
                    <p className="kuehlschrankP">3. Wenn der Dampf oben angekommen ist, wird er in den
                        Kompressor
                        geleitet. Darin wird er stark verdichtet. Es entsteht wieder
                        eine Flüssigkeit, die durch den hohen Verdichtungsgrad einen
                        weit höheren Siedepunkt hat.
                    </p>
                    <p className="kuehlschrankP">4. Eine an der Kompressor angeschlossene Pumpe leitet die
                        Flüssigkeit
                        in ein schlangenförmiges Rohrsystem auf der hinteren
                        Aussenwand des
                        Kühlschranks. Darin kühlt die Flüssigkeit wieder ab und gibt
                        die
                        Wärme, die sie im Inneren aufgenommen hat, nach aussen ab.
                    </p>
                    <p className="kuehlschrankP">5. Unten angekommen, gelangt die Flüssigkeit in ein
                        Drosselventil.
                        Dieses zerstäubt die Flüssigkeit wieder, damit der
                        Siedepunkt
                        wieder sehr niedrig wird.
                    </p>
                    <p className="kuehlschrankP">
                        6. Immer wenn im Inneren des Kühlschranks Wärme entsteht,
                        zum Beispiel wenn die Tür geöffnet wird
                        oder wenn etwas Warmes hineingestellt wird, verdampft ein
                        Teil der Kühlflüssigkeit. Genau diese
                        Menge Flüssigkeit wird vom Drosselventil wieder in das
                        innere Rohr hineingespritzt.
                    </p>

                </div>
                <div className="col-6">
                    <img src={imagineSelberZeichne} style={{height: "500px"}}
                         alt="Kühlschrank_Image1"/>
                    <p className="kuehlschrankP">
                        7. Der Kreislauf ist damit abgeschlossen. Erkennen
                        können Sie
                        den Vorgang am Brummen des Kühlschranks, das manchmal
                        einsetzt.
                        Immer wenn es im Kühlschrank zu warm wird, verdampft ein
                        Teil
                        der Flüssigkeit und Kompressor sowie Pumpe werden
                        aktiviert.
                    </p>

                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div className="parent">
                <h5>Kältemittel</h5>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div className="row">
                <div className="col-6">
                    <h6>Für was braucht man Isobutan?</h6>
                    <p className="kuehlschrankP">Isobutan weist einen sehr niedrigen
                        Treibhauseffekt auf und wird
                        deswegen in Kühlschränken als
                        Kältemittel eingesetzt.</p>
                    <br/>
                    <img src={isobutan} style={{height: "20%"}}
                         alt="Kühlschrank_Image2"/>
                    <br/>
                    <br/>
                    <h6>Wo ist der Siedepunkt?</h6>
                    <p className="kuehlschrankP">
                        Der Siedepunkt ist bei ca. -30°C.
                        Das Kühlmittel gelangt in flüssiger
                        Form bei ca. 1 bar in den
                        Kühlschrank.
                    </p>
                </div>
                <div className="col-6">
                    <h6>Ammoniak</h6>
                    <p className="kuehlschrankP">
                        Vor 80 Jahren, hiess das Kühlmittel Ammoniak, Schwefeldioxid oder Methylchlorid.
                    </p>


                    <img src={ammoniak} style={{height: "200px"}}
                         alt="Kühlschrank_Image2"/>

                    <br/>
                    <br/>
                    <br/>

                    <h6>
                        Warum ist Ammoniak giftig
                    </h6>
                    <p>
                        Ammoniak ist ein Gas, das aus Stickstoffverbindungen besteht. Beim Einatmen geringer
                        Konzentrationen wirkt es reizend, bei hohen Konzentrationen ätzend und es besteht
                        Lebensgefahr. Es ist ein stechend riechendes, farbloses, wasserlösliches und giftiges Gas.
                    </p>
                    <br/>
                    <h6>
                        Wie das Ammoniak im Kühlschrank gebraucht wurde
                    </h6>
                    <p>
                        Das gasförmige Ammoniak kondensiert im Kondensator durch Abkühlung. Hier gibt der
                        Kühlschrank Wärme an die Umgebung ab. Das nunmehr flüssige Ammoniak fliesst über
                        ein dünnes Rohr in den Verdampfer im Innenraum, üblicherweise im Eisfach.
                    </p>
                    <h6>
                        Wo ist der Siedepunkt?
                    </h6>
                    <p>
                        Der siedepunkt ist bei -33.34 °C
                    </p>
                </div>
            </div>

            <div className="parent">
                <h5>Beispiele</h5>
            </div>

            <br/>
            <br/>

            <div className="row">
                <div className="col-6">
                    <h6>Warum gibt ein Kühlschrank
                        mehr Wärme als Kälte
                        ab?</h6>
                    <p className="kuehlschrankP">Der Kühlschrank transportiert
                        also nicht nur Wärme nach
                        aussen,
                        sondern muss an der
                        Aussenseite gewissermassen für
                        zusätzliche
                        Hitze sorgen, damit die
                        Wärmeabgabe funktioniert und
                        damit der
                        Kreislauf des Kühlens. Das
                        ist der Grund, warum ein
                        Eisschrank
                        nach aussen mehr Wärme
                        abgibt, als er dem Innenraum
                        entzieht.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h6>Warum wird der
                        Raum wärmer, wenn
                        man den
                        Kühlschrank
                        offen
                        lässt?
                    </h6>
                    <p className="kuehlschrankP">
                        Wenn die Tür des
                        Kühlschrankes
                        geöffnet ist,
                        wird es im Raum
                        wärmer
                        nicht kälter.
                        Die Erklärung
                        ist ganz
                        einfach. Die
                        Aufgabe eines
                        Kühlschranks
                        ist es, die
                        Wärme aus dem
                        Kühlschrank zu
                        entfernen. Somit
                        wird der Raum
                        mit der Wärme
                        die ausgestossen
                        wird gewärmt.
                    </p>
                    <br/>
                    <br/>
                </div>
                <div className="col-6">
                    <h6>Wie viel Wärme gibt ein
                        Kühlschrank ab?</h6>
                    <p className="kuehlschrankP">
                        Im Idealfall ist der Kühlschrank von mittlerer Grösse der
                        Energieklasse A++ oder A+++, seine Rückseite ist entstaubt,
                        die Luft kann gut zirkulieren, sein Innenraum ist enteist und
                        er steht an einer kühlen Wand. Unter solchen Bedingungen gibt
                        ein Kühlschrank nur so viel Wärme ab wie eine kleine, gewöhnliche
                        Glühlampe von 25 Watt, die ständig brennt. Ein altes Gerät allerdings
                        an eine warme Wand gestellt, mit verstaubtem Radiator und vereistem
                        Innenraum kann leicht doppelt soviel Wärme abgeben.
                    </p>
                    <br/>
                    <h6>
                        Wie viel Kühlschrankarten gibt es?
                    </h6>
                    <p className="kuehlschrankP">Es gibt den
                        Kompressor
                        Kühlschrank,
                        Absorber Kühlschrank
                        und
                        Thermoelektrischer
                        Kühlschrank
                    </p>
                </div>
            </div>

            <br/>
            <br/>

            <div className="parent">
                <h5>Wichtiges</h5>
            </div>

            <div className="parent">
                <h6>Wo ist es am Wärmsten im Kühlschrank?</h6>
                <p className="kuehlschrankP">
                    Gemäss der physikalischen Erklärung, steigt wärmere Luft nach oben, und daher liegen in den beiden
                    oberen Fächern im Kühlschrank die Zonen mit den höheren Temperaturen.
                </p>
            </div>

            <div className="parent">
                <h6>Wo bewahre ich welche Lebensmittel auf?</h6>
            </div>
            <div className="parent">
                <p className="kuehlschrankP">Lebensmittel in den Kühlschrank richtig einräumen
                    Da moderne Kühlschränke aufgrund ihrer ausgeklügelten Technik
                    (z.B. die verschiedenen Kühlzonen) und der guten Energieeffizienz
                    mitunter ziemlich teuer sein können, ist es ratsam, vor dem Kauf
                    die Preise verschiedenerer Kühlschränke genau zu vergleichen. Mit
                    dem gesparten Geld können dann Lebensmittel gekauft und der neue
                    Kühlschrank eingeweiht werden.
                </p>
                <h6>Im Allgemeinen ist folgende Anordnung ratsam:</h6>

                <img src={kuehlzone} style={{height: "800px"}}
                     alt="eishaus"/>

            </div>


            <div className="parent">
                <h5>Quiz</h5>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col"/>
                    <th scope="col">Frage</th>
                    <th scope="col">Antwort</th>
                    <th scope="col"/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        Wie nennt man die Kühlflüssigkeit eines Kühlschrank?
                    </td>
                    <td className="antworten">
                            <span style={{display: "none"}} id="antwort-1">
                                <b>Propan und Butan</b>
                            </span>
                    </td>
                    <td>
                        <button id="button-1" type="button" onClick={function () {
                            const ANSWER = document.getElementById("antwort-1");
                            ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";
                        }}>
                            <b>Resultat</b>
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>
                        Warum gibt ein Kühlschrank mehr Wärme als Kälte ab?
                    </td>
                    <td className="antworten">
                <span style={{display: "none"}} id="antwort-2">
                <b>Warum gibt ein Kühlschrank mehr Wärme als Kälte ab?</b>
                </span>
                    </td>
                    <td>
                        <button id="button-2" type="button" onClick={function () {
                            const ANSWER = document.getElementById("antwort-2");
                            ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                        }}>
                            <b>Resultat</b>
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>
                        Warum wird der Raum wärmer, wenn man den Kühlschrank offen lässt?
                    </td>
                    <td className="antworten">
                <span style={{display: "none"}} id="antwort-3">
                    <b>Die Aufgabe eines Kühlschranks ist es, die Wärme aus dem Kühlschrank zu entfernen. Somit wird der Raum gewärmt von dem Kühlschrank.</b>
                </span>
                    </td>
                    <td>
                        <button id="button-3" type="button" onClick={function () {
                            const ANSWER = document.getElementById("antwort-3");
                            ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                        }}>
                            <b>Resultat</b>
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>
                        Wie viel arten von Kühlschranke gibt es?
                    </td>
                    <td className="antworten">
                <span style={{display: "none"}} id="antwort-4">
                    <b>
                        Es gibt den Kompressor Kühlschrank, Absorber Kühlschrank und Thermoelektrischer Kühlschrank
                    </b>
                </span>
                    </td>
                    <td>
                        <button id="button-4" type="button" onClick={function () {
                            const ANSWER = document.getElementById("antwort-4");
                            ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                        }}>
                            <b>Resultat</b>
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>
                        Wie viel Wärme gibt ein Kühlschrank gewöhnlich ab?
                    </td>
                    <td className="antworten">
                <span style={{display: "none"}} id="antwort-5">
                    <b>
                        Ein Kühlschrank gibt nur so viel Wärme ab wie eine kleine, gewöhnliche Glühlampe von 25 Watt, die ständig brennt.                     </b>
                </span>
                    </td>
                    <td>
                        <button id="button-5" type="button" onClick={function () {
                            const ANSWER = document.getElementById("antwort-5");
                            ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                        }}>
                            <b>Resultat</b>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>


            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <h4>
                    Wird der Raum kälter wenn man den Kühlschrank offen lässt?
                </h4>
            </div>

            <div className="parent">
                <img className="image1" src={emptyRoom} alt="Bild von einem leeren Raum"/>
                <img className="image2" id="myImage" src={kuehlschrankZu} style={{height: "250px"}}
                     alt={"kuehlschrankZu"}/>
            </div>


            <div>
                <button
                    onClick={toggleFridge}>{fridgeClosed ? (
                    <>Kühlschrank öffnen</>
                ) : (
                    <>Kühlschrank schliessen</>
                )}
                </button>
            </div>

            <br/>

            <div style={{display: "none"}} id="callContainer">
                <img className={'image3'} style={{height: "150px"}} id="callGif" src={temperaturMesser} alt={"gif"}/>
                <br/>
                <br/>
                <h4 style={{color: "#d32f2f"}} id="callText">Nein der Raum wird wärmer!!</h4>
            </div>

            <br/>
            <br/>

        </div>
    );
}

export default Kuehlschrank;