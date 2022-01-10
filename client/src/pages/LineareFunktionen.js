import useDocumentTitle from "../utils/UseDocumentTitle";
import {getElement} from "bootstrap/js/src/util";
import theorie from "../img/linearefunktionen/theorie.jpg";
import kuehlschrankZu from "../img/kuehlschrank/KühZuGesch.jpg";
import React from "react";


const LineareFunktionen = () => {
    useDocumentTitle('Linearefunktionen');
    document.getElementById('myImage').setAttribute('src', theorie);
    return (
        <div>
            <div className={"container"}>
                <h1>Theorie Lineare-Funktionen / Geradengleichungen</h1>
                <h2>Theorie</h2>
                <p>
                    Eine Funktion stellt immer das Verhältnis zweier Variablen dar. Meist werden die zwei Variablen x und y genannt.<br/>
                    Dieses Verhältnis kann dann durch eine Gleichung ausgedrückt und in einem Koordinatensystem eingezeichnet werden.<br/>
                    Lineare Funktionen beschreiben immer ein lineares Verhältnis, bzw. eine lineare Zuordnung zwischen zwei Variablen.<br/>
                    Daher sind ihre Graphen eine gerade Linie im Koordinatensystem.<br/>
                </p>
                    Mathematisch ausgedrückt geht es um folgenden Zusammenhang
                    <img id="myImage" src={theorie} style={{height: "250px"}}>
                <p>
                    Dabei sind alle Variablen, also x und y ( y ist das Gleiche wie f(x) ), m und n, beliebige Zahlen.<br/>
                    Je nach Besonderheit der Zahlen, sehen die Funktionen dann etwas anders aus.<br/>
                    Es handelt sich jedoch immer um eine gerade Linie!
                </p>
            </div>
            <div>
                <button id="button" value="Lösungen" onClick="sichtbar()">Lösungen</button>
                <div id="losungen" name="losungen" style="display: none">
                    lösige ine schriebe
                </div>
                <script>
                    function sichtbar(){
                    document.getElementById("losungen").style = 'display:block';
                }
                </script>
            </div>
            <div style={{height: "100vh"}}>
                <iframe title={"Lineare Funktionen"} src={'https://bzz-ab20c.github.io/'}
                        style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    );
}

export default LineareFunktionen;