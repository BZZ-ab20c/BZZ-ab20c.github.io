import useDocumentTitle from "../utils/UseDocumentTitle";
import theorie from "../img/linearefunktionen/theorie.jpg";
import React from "react";

function togglelosungen() {
    const element = document.getElementById("losungen");
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

const LineareFunktionen = () => {
    useDocumentTitle('Linearefunktionen');

    return (
        <div>
            <div className={"container"}>
                <h1>Theorie Lineare-Funktionen / Geradengleichungen</h1>
                <h2>Theorie</h2>
                <p>
                    Eine Funktion stellt immer das Verhältnis zweier Variablen dar. Meist werden die zwei Variablen x
                    und y genannt.<br/>
                    Dieses Verhältnis kann dann durch eine Gleichung ausgedrückt und in einem Koordinatensystem
                    eingezeichnet werden.<br/>
                    Lineare Funktionen beschreiben immer ein lineares Verhältnis, bzw. eine lineare Zuordnung zwischen
                    zwei Variablen.<br/>
                    Daher sind ihre Graphen eine gerade Linie im Koordinatensystem.<br/>
                </p>
                <p>
                Mathematisch ausgedrückt geht es um folgenden Zusammenhang
                </p>
                <img id="myImage" src={theorie} style={{height: "350px", marginRight: 0}} alt={""}/>
                <p>
                    Dabei sind alle Variablen, also x und y ( y ist das Gleiche wie f(x) ), m und n, beliebige
                    Zahlen.<br/>
                    Je nach Besonderheit der Zahlen, sehen die Funktionen dann etwas anders aus.<br/>
                    Es handelt sich jedoch immer um eine gerade Linie!
                </p>
            </div>
            <div>
                <h2>Übungen</h2>
                <p>
                    a) Ohne oben nachzu schauen welche ist die Korrekte Formel der Linearen Funktionen<br/>
                    b) Zeichne eine gerade y = 6x+4<br/>
                    c) Zeichne eine Gerade y= 2x+3 und eine y= -2x+3 an wewlchem punkt schneiden sie sich?<br/>
                    d) <br/>
                    e) <br/>
                </p>
                <button id="button" value="Lösungen" onClick={togglelosungen}>Lösungen</button>
                <div id="losungen" name="losungen" style={{display: 'none'}}>
                    dwadwadwad
                </div>
            </div>
            <div style={{height: "100vh"}}>
                <iframe title={"Lineare Funktionen"} src={'https://bzz-ab20c.github.io/'}
                        style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    );
}

export default LineareFunktionen;