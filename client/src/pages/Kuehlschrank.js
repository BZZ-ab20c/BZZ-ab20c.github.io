import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Kuehlschrank/KuehlschrankStyle.css'

import kuehlschrankZu from "../img/kuehlschrank/KühZuGesch.jpg";
import kuehlschrankOffen from "../img/kuehlschrank/KühOffGesch.jpg";
import imagineSelberZeichne from "../img/kuehlschrank/ImagineSelberZeichne.jpg";
import isobutan from '../img/kuehlschrank/Isobutan.png'
import emptyRoom from '../img/kuehlschrank/emptyRoom.png'
import temperaturMesser from '../img/kuehlschrank/TemperaturMesser.gif'

const Kuehlschrank = () => {
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

            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <h4>
                    Wird der Raum kälter wen man den Kühlschrank offen lässt?
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
            <div className={"row"}>
                <div className={"col"}>
                    <h2>Wie ein Kühlschrank funktioniert</h2>
                </div>
            </div>

            <br/>
            <br/>
            <div className="row">
                <div className="col-6">
                    <p>1. An der inneren Rückwand des Kühlschrankes befindet sich
                        ein
                        schlangenförmiges Rohr, das von unten nach oben verläuft.
                        Darin
                        befindet sich die Kühlflüssigkeit. (Blau)
                    </p>
                    <p>2. Sobald im Kühlschrank Wärme entsteht, wird die
                        Kühlflüssigkeit
                        ebenfalls wärmer, erreicht den Siedepunkt und verdampft. Der
                        Dampf steigt im Rohr nach oben.
                    </p>
                    <p>3. Wenn der Dampf oben angekommen ist, wird er in den
                        Kompressor
                        geleitet. Darin wird er stark verdichtet. Es entsteht wieder
                        eine Flüssigkeit, die durch den hohen Verdichtungsgrad einen
                        weit höheren Siedepunkt hat.
                    </p>
                    <p>4. Eine an der Kompressor angeschlossene Pumpe leitet die
                        Flüssigkeit
                        in ein schlangenförmiges Rohrsystem auf der hinteren
                        Außenwand des
                        Kühlschranks. Darin kühlt die Flüssigkeit wieder ab und gibt
                        die
                        Wärme, die sie im Inneren aufgenommen hat, nach außen ab.
                    </p>
                    <p>5. Unten angekommen, gelangt die Flüssigkeit in ein
                        Drosselventil.
                        Dieses zerstäubt die Flüssigkeit wieder, damit der
                        Siedepunkt
                        wieder sehr niedrig wird.
                    </p>
                    <p>
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
                    <p>
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

            <div>
                <h2>Kühlmittel</h2>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-6">
                    <img src={isobutan} style={{position: "center", height: "300px"}}
                         alt="Kühlschrank_Image2"/>
                </div>
                <div className="col-6">
                    <h6>Für was braucht man Isobutan?</h6>
                    <p>Isobutan weist einen sehr niedrigen
                        Treibhauseffekt auf (GWP 3) und wird
                        deswegen in Kühlschränken als
                        Kältemittel eingesetzt.</p>
                    <br/>
                    <h6>Wo ist der Siedepunkt?</h6>
                    <p>
                        Der Siedepunkt ist bei ca. -30°C.
                        Das Kühlmittel gelangt in flüssiger
                        Form bei ca. 1 bar in den
                        Kühlschrank.
                    </p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>

            <div className="row">
                <div className="col-6">
                    <h6>Warum gibt ein Kühlschrank
                        mehr Wärme als Kälte
                        ab?</h6>
                    <p>Der Kühlschrank transportiert
                        also nicht nur Wärme nach
                        außen,
                        sondern muss an der
                        Außenseite gewissermaßen für
                        zusätzliche
                        Hitze sorgen, damit die
                        Wärmeabgabe funktioniert und
                        damit der
                        Kreislauf des Kühlens. Das
                        ist der Grund, warum ein
                        Eisschrank
                        nach außen mehr Wärme
                        abgibt, als er dem Innenraum
                        entzieht.
                    </p>
                    <br/>
                    <br/>
                    <h6>Wie viel arten von
                        Kühlschranke gibt
                        es?</h6>
                    <p>Es gibt den
                        Kompressor
                        Kühlschrank,
                        Absorber Kühlschrank
                        und
                        Thermoelektrischer
                        Kühlschrank
                    </p>
                    <br/>
                    <br/>
                </div>
                <div className="col-6">
                    <h6>Wie viel wärme gibt ein
                        Kühlschrank ab?</h6>
                    <p>Die meisten Kühlschränke
                        werden von einem
                        Kondensatormotor
                        mit ca. 90 W angetrieben.
                        Also wird der Motor alleine
                        deutlich
                        weniger als 90 W in Wärme
                        umsetzen. Und solange durch
                        die Türe
                        keine fremde Wärmenergie in
                        den Kühlschrank reinkommt,
                        wird der
                        auch nicht viel mehr Wärme
                        erzeugen.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <h6>Warum wird der
                        Raum wärmer wen
                        man den
                        Kühlschrank
                        offen
                        lässt?</h6>
                    <p>Wen die Tür des
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
                        wärme aus dem
                        Kühlschrank zu
                        entfernen. Somit
                        wird der
                        Raum gewärmt von
                        dem Kühlschrank.
                    </p>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Kuehlschrank;