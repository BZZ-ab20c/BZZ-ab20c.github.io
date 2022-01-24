import useDocumentTitle from "../utils/UseDocumentTitle";
import theorie from "../img/linearefunktionen/theorie.jpg";
import geradensteigung from "../img/linearefunktionen/geradensteigung.jpg";
import steigunggleichung from "../img/linearefunktionen/steigunggleichung.jpg";
import aufgabe_d from "../img/linearefunktionen/aufgabe_d.jpg";
import yabschnitt from "../img/linearefunktionen/yabschnitt.jpg";
import y_beispiel from "../img/linearefunktionen/y_beispiel.jpg";
import y_beispiel2 from "../img/linearefunktionen/y_beispiel2.jpg";
import y_beispiel3 from "../img/linearefunktionen/y_beispiel3.jpg";
import y_beispiel4 from "../img/linearefunktionen/y_beispiel4.jpg";
import y_beispiel5 from "../img/linearefunktionen/y_beispiel5.jpg";
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
                    Die Steigung einer Geraden gibt an, um wie viele Einheiten
                    sich die y-Koordinate eines<br/>
                    Punktes verändert, wenn sich seine x-Koordinate um eine Einheit verändert. Anders gesagt:<br/>
                    Die Steigung einer Geraden misst, wie steil sie ansteigt.<br/><br/>

                    Das m in der Formel( f(x)=m*x+t ) wird Steigung genannt<br/>
                    <h4>
                        Beispiel mit einem Steigungsdreieck
                    </h4>
                    Man bestimme die Steigung der gegebenen Gerade. Hierzu sucht man sich zwei Punkte aus,<br/>
                    beispielweise wie in der Skizze A(1∣3,5) und B(3∣4,5). Dabei nennt man das gezeichnete<br/>
                    Dreieck Steigungsdreieck<br/>
                </p>
                <p>
                    <img id="myImage" src={geradensteigung} style={{height: "350px", marginRight: 0}} alt={""}/><br/>
                </p>
                <p>
                    Man bestimmt Δy und Δx, also den Unterschied der y-Koordinaten und x-Koordinaten der gegebenen
                    Punkte …<br/>

                    m=Δy:Δx<br/>
                    ... und setzt die Längenwerte für Δy und Δx in die Formel ein.<br/>
                    Δy = yB - yA = 4,6 - 3,5 = 1<br/>
                    Δx = xB - yA = 3 - 1 = 2<br/>

                    Die Gerade hat also die Steigung:
                    <p>
                        <img id="myImage" src={steigunggleichung} style={{height: "50px", marginRight: 0}} alt={""}/><br/>
                    </p>

                </p>
                <p>
                    <h3>Der y-Achsenabschnitt</h3><br/>
                    <p>
                        <img id="myImage" src={yabschnitt} style={{height: "350px", marginRight: 0}} alt={""}/><br/>
                    </p>
                    Der y-Achsenabschnitt beträgt 1,5. Der dazugehörige x-Wert ist 0.

                    Die Funktion schneidet die y-Achse an dem Punkt, wo der x-Wert null ist. Vorsicht! Die beiden Achsen<br/>
                    dürfen nicht verwechselt werden: Die x-Achse verläuft von links nach rechts und die y-Achse von unten nach oben.<br/>
                    Die Funktionsgleichung mit hilfe des y-Achsenabschnitt bestimmen.<br/>

                    Bestimmen der Funktionsgleichung mit dem y-Achsenabschnitt<br/>

                    <p>
                        <img id="myImage" src={y_beispiel} style={{height: "350px", marginRight: 0}} alt={""}/><br/>
                    </p>
                    Dieser Funktion können wir sofort ansehen, dass der y-Achsenabschnitt 4 beträgt,.<br/>
                    da die Funktion die y-Achse an dieser Stelle schneidet.<br/>
                    Auch die Steigung können wir durch bloßes Hinschauen herausfinden. Wenn wir eine Einheit x nach rechts gehen,.<br/>
                    müssen wir eine Einheit in y-Richtung nach oben gehen.<br/>
                    <p>
                        <img id="myImage" src={y_beispiel2} style={{height: "50px", marginRight: 0}} alt={""}/><br/>
                    </p>
                    Damit beträgt die Steigung 1.<br/><br/>

                    Wir müssen die vollständige Funktionsgleichung bestimmen. Dafür setzen wir die beiden ermittelten Werte in die Gleichung ein.<br/>
                    m = 1<br/>
                    n = 4<br/>
                    f(x) = m ⋅ x + n<br/>
                    f(x) = 1 ⋅ x + 4<br/><br/>

                    y-Achsenabschnitt mit der Steigung bestimmen<br/>
                    Es kann sein, dass eine Abbildung eines Graphen gegeben ist, bei dem der Schnittpunkt mit der y-Achse nicht sichtbar ist.<br/>
                    Wie beispielsweise bei dieser Abbildung:<br/>

                    <p>
                        <img id="myImage" src={y_beispiel3} style={{height: "350px", marginRight: 0}} alt={""}/><br/>
                    </p>
                    Dieser Graph ist gegeben und der y-Achsenabschnitt soll ermittelt werden. Um die komplette Gleichung bestimmen zu können,<br/>
                    fehlt der y-Achsenabschnitt. Dieser ist in unserem Graph nicht eingezeichnet, kann also nicht einfach abgelesen werden.<br/><br/>

                    Um den Ordinatenabschnitt berechnen zu können, nutzen wir die Formel zur Berechnung der Steigung. Die Steigung errechnen wir als erstes.<br/>
                    Sie beträgt m = 1,5. Doch mit dieser Formel können wir jetzt auch den y-Achsenabschnitt ermitteln. Hierfür setzen wir die Koordinaten<br/>
                    eines uns bekannten Punktes und die Steigung der Funktion in die folgende Formel ein:<br/>
                    <p>
                        <img id="myImage" src={y_beispiel4} style={{height: "50px", marginRight: 0}} alt={""}/><br/>
                    </p>
                    Wir setzen die Steigung m=1,5 und die Koordinaten des Punktes A(2|1) ein. Die rote 0 ist die x-Koordinate<br/>
                    des y-Achsenabschnittes. Alles in die Formel eingesetzt ergibt sich:<br/>
                    <p>
                        <img id="myImage" src={y_beispiel5} style={{height: "50px", marginRight: 0}} alt={""}/><br/>
                    </p>
                    Jetzt müssen wir die Formel nur noch nach y2 umstellen und wir haben den y-Achsenabschnitt.<br/>
                    Der erste Schritt ist also die Multiplikation mit −2. Es folgt:<br/><br/>
                    1,5⋅(−2)=y2−1<br/><br/>
                    Im nächsten Schritt addieren wir 1, um den Wert y2 allein auf einer Seite zu haben. Es ergibt sich:<br/>
                    <br/>
                    −3+1=y2→y2=−2<br/><br/>
                    Der y-Achsenabschnitt der Funktion beträgt also −2.
                </p>
                <p>
                    <h3> Beispiel aus dem alltag zum die Theorie einfacher zu machen</h3><br/>
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


                <h2>Übungen</h2>
                <p>
                    a) Ohne oben nach zu schauen welche ist die Korrekte Formel der Linearen Funktionen<br/>
                    b) Zeichne eine gerade y = 6x+4<br/>
                    c) Zeichne eine Gerade y= 2x+3 und eine y= -2x+3 an welchem punkt schneiden sie sich?<br/>
                    d) Schreib die gleichung auf für diese Gerade: <img id="myImage" src={aufgabe_d}
                                                                        style={{height: "200px", marginRight: 0}}
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
                    Erklärung GeoGebra
                </h3>
                Das GeoGebra benutzt sich ganz einfach man gibt im eingabe Feld einfach die Gleichung ein die man sich anzeigen lassen will.<br/>
                Wenn man zwei linien haben will muss man auf das plus drücken und dann einfach eine neue Gleichung einschreiben.
            </p>
            <div style={{height: "100vh"}}>
                <iframe title={"Lineare Funktionen"} src={'https://bzz-ab20c.github.io/'}
                        style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    )
        ;
}

export default LineareFunktionen;