import useDocumentTitle from "../utils/UseDocumentTitle";
import theorie from "../img/linearefunktionen/theorie.jpg";
import aufgabe_d from "../img/linearefunktionen/aufgabe_d.jpg";
import React from "react";

function togglelosungen() {
    const element = document.getElementById("losungen");
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

const LineareFunktionen = () => {
    useDocumentTitle('Linearefunktionen');

    return (
        <div className={"alles"}>
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
                <img id="myImage" src={theorie} style={{height: "450px", marginRight: 0}} alt={""}/>
                <p>
                    Dabei sind alle Variablen, also x und y ( y ist das Gleiche wie f(x) ), m und n, beliebige
                    Zahlen.<br/>
                    Je nach Besonderheit der Zahlen, sehen die Funktionen dann etwas anders aus.<br/>
                    Es handelt sich jedoch immer um eine gerade Linie!
                </p>
                <p>
                    <h3>
                        Die Geradensteigung
                    </h3>
                    Das m in der Formel( f(x)=m*x+t ) wird Steigung genannt
                    <h4>
                        Beispiel mit einem Steigungsdreieck
                    </h4>
                    Man bestimme die Steigung der gegebenen Gerade. Hierzu sucht man sich zwei Punkte aus,<br/>
                    beispielweise wie in der Skizze A(1∣3,5) und B(3∣4,5). Dabei nennt man das gezeichnete<br/>
                    Dreieck Steigungsdreieck
                </p>
                <p>
                    <h3>
                        Der y-Achsenabschnitt im einzelnen Die Steigung einer Geraden gibt an, um wie viele Einheiten
                        sich die y-Koordinate eines<br/>
                        Punktes verändert, wenn sich seine x-Koordinate um eine Einheit verändert. Anders gesagt:<br/>
                        Die Steigung einer Geraden misst, wie steil sie ansteigt.
                    </h3>

                </p>
                <p>
                    Beispiel aus dem alltag zum die Theorie einfacher zu machen.<br/>
                    Ein Informatiker verlangt 4 Franken pro Stunde. Ausserdem verlangt er auch noch für die Fahr tzum
                    Arbeitsplatz 3 Franken.<br/>
                    Dies ist ein einfaches Beispiel für Linearefunktionen. Die 3 Franken sind die Fixkosten, da sie
                    unabhängig von der <br/>
                    Arbeitszeit sind. Die 4 Franken sind die variablen Kosten, da diese davon abhängig sind, wie lange
                    der Informatiker arbeitet.<br/>
                    Wir können nun also eine lineare Funktion ermitteln, die die Kosten abhängig von der Arbeitszeit
                    angibt.<br/>
                    Am Ende können wir dann für x die gearbeiteten Stunden einsetzen und bekommen die gesamtkosten
                    heraus (y).
                </p>
                <p>
                    Für eine Lkineare Funktion brauchen wir die Steigung und den y-Achsenabschnitt
                </p>
                <p>
                    Der y-Achsenabschnitt gibt in diesem Fall an, wieviel Geld der Informatiker bekommt wenn er 0
                    Stunden gearbeitet hat (x=0).<br/>
                    Dieser Wert ist gleich 3 Franken, da er für die Anfahrt 3 Franken bekommt auch wenn er dann sofort
                    wieder nach Hause fahren würde.
                </p>
                <p>
                    Die Steigung gibt in diesem Fall an, um wie viel die Kosten pro Stunde steigen. <br/>
                    Es handelt sich also um den Preis den der Informatiker pro Stunde nimmt. Auch diesen haben wir
                    gegeben, er nimmt 4 Franken pro Stunde.<br/><br/>
                    Unsere lineare Funktion lautet also:<br/><br/>

                    Gesamtkosten = Stundenlohn • gearbeitete Stunden + Anfahrtskosten<br/>
                    Also f(x)= 4 * x + 3
                </p>

                <p>
                    Mithilfe dieser Funktion können wir jetzt ganz bestimmen wieviel Geld der Informatiker für eine
                    bestimmte Stundenanzahl erhält.<br/>
                    Wir können die Lösung dabei grafisch ablesen oder sie mit der Funktionsvorschrift ausrechnen. Wenn
                    wir die Lösung ganz genau wissen wollen,<br/>
                    ist es besser den rechnerischen Weg zu gehen, da wir sie vom Grafen nur ungefähr ablesen können.
                    Dafür setzen wir einfach die gearbeiteten Stunden<br/>
                    für x ein und rechnen anschließend y aus.
                </p>
            </div>
            <div className={"container"}>
                <h2>Übungen</h2>
                <p>
                    a) Ohne oben nach zu schauen welche ist die Korrekte Formel der Linearen Funktionen<br/>
                    b) Zeichne eine gerade y = 6x+4<br/>
                    c) Zeichne eine Gerade y= 2x+3 und eine y= -2x+3 an welchem punkt schneiden sie sich?<br/>
                    d) Schreib die gleichung auf für diese Gerade: <img id="myImage" src={aufgabe_d}
                                                                        style={{height: "350px", marginRight: 0}}
                                                                        alt={""}/>
                    <br/>
                    e) Zeichne eine Gerade y= 1x+2
                </p>
                <button id="button" value="Lösungen" onClick={togglelosungen}>Lösungen</button>
                <div id="losungen" name="losungen" style={{display: 'none'}}>
                    a) f(x)=m*x+n<br/>
                    b) gib die gleichung unten ein<br/>
                    c) 3<br/>
                    d) <br/>
                    e) gib die gleichung unten ein
                </div>
            </div>
            <p>
                <h3>
                    Erklärung Geobra
                </h3>
            </p>
            <div style={{height: "100vh"}}>
                <iframe title={"Lineare Funktionen"} src={'https://bzz-ab20c.github.io/'}
                        style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    );
}

export default LineareFunktionen;