import React from 'react';

import kuehlschrankZu from "../img/kuehlschrank/KühlschrankZu.jpg";
import kuehlschrankOffen from "../img/kuehlschrank/KühlschrankOffen.jpg";
import imagineSelberZeichne from "../img/kuehlschrank/ImagineSelberZeichne.jpg";

function closeFridge() {
    document.getElementById('myImage').setAttribute('src', kuehlschrankZu);
    document.getElementById('myImage').setAttribute('alt', 'Kühlschrank zu');
}

function openFridge() {
    document.getElementById('myImage').setAttribute('src', kuehlschrankOffen);
    document.getElementById('myImage').setAttribute('alt', 'Kühlschrank offen');
}

const Kuehlschrank = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)

    return (
        <div>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h1>Kühlschrank</h1>
                <br/>
            </div>

            <div className="container d-flex flex-column align-items-center justify-content-center">
                <img id="myImage" src={kuehlschrankZu} style={{width: "100px"}} alt={"Kühlschrank zu"}/>
            </div>

            <div className="container d-flex align-items-center justify-content-center">
                <button onClick={openFridge}>Kühlschrank öffnen</button>
                <button onClick={closeFridge}>Kühlschrank schliessen</button>
            </div>

            <div className="container d-flex flex-column align-items-center justify-content-center">
                <br/>
                <button onClick={
                    function () {
                        const loesung = document.getElementById("lösung1");
                        loesung.style.display = (loesung.style.display === "none") ? "block" : "none";
                    }
                }>Warum gibt ein Kühlschrank mehr Wärme als Kälte ab?
                </button>
                <br/>
                <p id="lösung1" style={{display: "none"}}>
                    Der Kühlschrank transportiert also nicht nur Wärme nach außen, " +
                    "sondern muss an der Außenseite gewissermaßen für zusätzliche Hitze sorgen, " +
                    "damit die Wärmeabgabe funktioniert – und damit der Kreislauf des Kühlens. Das ist der Grund," +
                    " warum ein Eisschrank nach außen mehr Wärme abgibt, als er dem Innenraum entzieht.
                </p>
                <br/>
            </div>

            <div className="container d-flex flex-column align-items-center justify-content-center">
                <br/>
                <button onClick="myFunction2()">Wie viel wärme gibt ein Kühlschrank ab?</button>
                <br/>
                <p id="lösung2"/>
                <script>
                    function myFunction2() {
                    document.getElementById("lösung2").innerHTML = "Die meisten Kühlschränke werden von einem " +
                        "Kondensatormotor mit ca. 90 W angetrieben. Also wird der Motor alleine deutlich weniger" +
                        " als 90 W in Wärme umsetzen. Und solange durch die Türe keine fremde Wärmenergie in den Kühlschrank " +
                        "reinkommt, wird der auch nicht viel mehr Wärme erzeugen."
                }
                </script>
                <br/>
            </div>


            <div className="container d-flex flex-column align-items-center justify-content-center">
                <br/>
                <button onClick="myFunction3()">Wie viel arten von Kühlschrank gibt es?</button>
                <br/>
                <p id="lösung3"/>
                <script>
                    function myFunction3() {
                    document.getElementById("lösung3").innerHTML =
                        "Kompressorkühlschrank, " +
                        "Absorberkühlschrank und " +
                        "Thermoelektrischer Kühlschrank"
                }
                </script>
                <br/>
            </div>
            <br/>
            <br/>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <br/>
                <button onClick="myFunction4()">Wo ist der Siedepunkt?</button>
                <br/>
                <p id="lösung4"/>
                <script>
                    function myFunction4() {
                    document.getElementById("lösung4").innerHTML =
                        "Bei einer Mischung von Wasser und Frostschutzmittel " +
                        "im Verhältnis 1:1 liegt der Siedepunkt des Kühlmittels " +
                        "bei etwa 107° C und bietet dem Kühlsystem somit eine " +
                        "enorme Leistungsreserve."
                }
                </script>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div
                className="container d-flex flex-column align-items-center justify-content-center">
                <img src={imagineSelberZeichne} style={{position: "absolute", height: "350px"}}
                     alt="Kühlschrank_Image1"/>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div
                className="container d-flex flex-column align-items-center justify-content-center">
                <ol>
                    <p>1. An der inneren
                        Rückwand
                        des Kühlschrankes
                        befindet
                        sich ein
                        schlangenförmiges
                        Rohr, das von
                        unten nach oben
                        verläuft.
                        Darin befindet sich
                        die
                        Kühlflüssigkeit.
                    </p>
                    <p>2. Sobald im
                        Kühlschrank
                        Wärme entsteht, wird
                        die
                        Kühlflüssigkeit
                        ebenfalls
                        wärmer, erreicht
                        den Siedepunkt und
                        verdampft. Der Dampf
                        steigt
                        im Rohr nach oben.
                    </p>
                    <p>3. Wenn der Dampf
                        oben
                        angekommen ist, wird
                        er in
                        den Kompressor
                        geleitet.
                        Darin wird er stark
                        verdichtet. Es
                        entsteht
                        wieder eine
                        Flüssigkeit, die
                        durch den hohen
                        Verdichtungsgrad
                        einen
                        weit höheren
                        Siedepunkt hat.
                    </p>
                    <p>4. Eine an der
                        Kompressor
                        angeschlossene Pumpe
                        leitet
                        die Flüssigkeit in
                        ein
                        schlangenförmiges
                        Rohrsystem auf der
                        hinteren
                        Außenwand des
                        Kühlschranks.
                        Darin kühlt die
                        Flüssigkeit
                        wieder ab und
                        gibt die Wärme, die
                        sie im
                        Inneren aufgenommen
                        hat,
                        nach außen ab.
                    </p>
                    <p>5. Unten angekommen,
                        gelangt
                        die Flüssigkeit in
                        ein
                        Drosselventil.
                        Dieses
                        zerstäubt die
                        Flüssigkeit
                        wieder, damit der
                        Siedepunkt
                        wieder sehr niedrig
                        wird.
                    </p>
                    <p>
                        6. Immer wenn im
                        Inneren des
                        Kühlschranks Wärme
                        entsteht,
                        zum Beispiel wenn
                        die Tür
                        geöffnet wird
                        oder wenn etwas
                        Warmes
                        hineingestellt wird,
                        verdampft ein Teil
                        der
                        Kühlflüssigkeit.
                        Genau diese
                        Menge
                        Flüssigkeit wird vom
                        Drosselventil wieder
                        in das
                        innere Rohr
                        hineingespritzt.
                    </p>
                    <p>
                        7. Der Kreislauf ist
                        damit
                        abgeschlossen.
                        Erkennen
                        können Sie den
                        Vorgang am
                        Brummen des
                        Kühlschranks,
                        das manchmal
                        einsetzt. Immer
                        wenn es im
                        Kühlschrank zu
                        warm wird, verdampft
                        ein
                        Teil der Flüssigkeit
                        und
                        Kompressor sowie
                        Pumpe
                        werden aktiviert.
                    </p>
                </ol>
            </div>
        </div>
    );
}

export default Kuehlschrank;