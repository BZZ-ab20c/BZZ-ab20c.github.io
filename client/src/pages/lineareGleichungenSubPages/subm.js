import 'bootstrap/dist/css/bootstrap.min.css';
import LGS from "../../img/lineargleichungen/lgslf.jpg";
import LGS2 from "../../img/lineargleichungen/lgslf2.jpg";
import '../../styles/lineareGleichungen/sbs.css';
import LineareGleichungenBanner from "./banner";
import {saveAs} from "file-saver";
import useDocumentTitle from "../../utils/UseDocumentTitle";

const SUBM = () => {
    useDocumentTitle('Linearegleichungen | SUBM');

    const saveFile = () => {
        saveAs(
            "https://bzzch.sharepoint.com/:b:/r/teams/ABU20-Fachunterricht/Freigegebene%20Dokumente/Mathematik/WebseiteDateien/NadinaWebsite/%C3%9Cbungen_Sv.pdf?csf=1&web=1&e=fwAvJn",
            "Aufgaben_Sv.pdf"
        );
    };

    const saveFile1 = () => {
        saveAs(
            "https://bzzch.sharepoint.com/:b:/r/teams/ABU20-Fachunterricht/Freigegebene%20Dokumente/Mathematik/WebseiteDateien/NadinaWebsite/L%C3%B6sung_SV.pdf?csf=1&web=1&e=s7FYre",
            "Lösung_Sv.pdf.pdf"
        );
    };

    return (
        <div>
            {/*Banner*/}
            <LineareGleichungenBanner title={'Substitutionsverfahren'} backbutton={true}/>
            <section className="einleitung">
                <div className="container">
                    <div className="row">
                        <div className="tag-title">
                            <p style={{textAlign: "center"}}>
                                Inhalt
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="box">
                            <div className="box-inhalt">
                                Was lernst du alles auf dieser Seite über das Substitutionsmethode?
                                <br/>
                                Als erstes kannst du ein erstes Beispiel mit dem Lösungsverfahren Substitutionsmethode
                                anschauen. Dieses ist Schritt für Schritt beschrieben und erklärt und einfach zu
                                verstehen.<br/>
                                Wer sich noch eine etwas kompliziertere Aufgabe anschauen möchte kann das gerne machen.
                                Diese findest du unter 'schwereres Beispiel'.<br/>
                                Als letztes kannst du noch eine Blatt herunterladen welches weitere Aufgaben zum Lösen
                                hat. Auch kannst du dir dazu die Lösungen herunterladen.<br/>
                                Auch findest du noch Hilfreiche Webseiten sowie Youtube Kanale um dein Wissen zu
                                vertiefen.
                                <br/>
                                <br/>
                                <b>Viel Spass beim lernen!</b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <section id="math">
                <div className="container">
                    <div className="tag-title">
                        <p style={{textAlign: "center"}}>
                            Aufgaben
                        </p>
                    </div>
                    <button className="collapsible" onClick={function () {
                        const inhalt = document.getElementById("inhalt");
                        inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";
                    }}>
                        Substitutionsmethode erstes Beispiel
                    </button>
                    <p id="inhalt" style={{display: "none"}}>
                        <h2 className="describtion-math">Substitutionsmethode einfaches Beispiel</h2>
                        <p className="describtion-math">Als erstes schauen wir uns ein einfaches Beispiel der
                            Substitutionsmethode an.</p>

                        <p className="describtion-math"><b>Schritt 1: </b>Gegeben sind zwei Gleichungen.
                            Wir entscheiden uns im <u>ersten Schritt x herauszufinden.</u></p>
                        <p className="tag-02">(I) 6x + 4y = 4</p>
                        <p className="tag-02">(II) y = 5 - 2x</p>

                        <p className="describtion-math"><b>Schritt 2: </b>Wie wir bei der zweiten Gleichung sehen können,
                            ist y schon definiert. Das ist ein Vorteil, wenn y oder x bereits definiert ist,
                            da wir das Einsetzungsverfahren(Substitutionsmethode) verwendet können. Man kann y oder x
                            direkt in den anderen Term einsetzen.</p>
                        <p className="tag-02">(I) 6x + 4<font color="red">y </font> = 4</p>
                        <p className="tag-02">(II) <font color="red">y </font> = 5 - 2x</p>

                        <p className="describtion-math"><b>Das ergibt :</b></p>
                        <p className="tag-02">6x + 4(5-2x) = 4</p>

                        <p className="describtion-math"><b>Schritt 3: </b>Nun fassen wir zusammen.</p>
                        <p className="tag-02">6x + 20 - 8x = 4</p>
                        <p className="tag-02">-2x + 20 = 4 | -20</p>
                        <p className="tag-02">-2x = - 16 | :(-2)</p>
                        <p className="tag-02"><span className="double_underline">x = 8</span></p>


                        <p className="describtion-math"><b>Schritt 4: </b>Nun müssen wir noch y herausfinden, um dem
                            kompletten Schnittpunkt zu bekommen. Dafür nehmen wir den
                            zweiten Tern und setzen in diesen x ein.</p>
                        <p className="tag-02">(II) y = 5 - 2x</p>
                        <p className="describtion-math">Anstelle von x (Da wir das schon haben) setzten wir nun 8 ein, da
                            x = 8 ergeben hat.</p>
                        <p className="tag-02">y = 5 - 2(8)</p>
                        <p className="describtion-math">Nun können wir y berechnen und danach auflösen. Hierbei
                            wir die Zahl, die wo vorher für x stand mit der Zahl in der Klammer nun multipliziert.</p>
                        <p className="tag-02">y = 5 - 16</p>
                        <p className="tag-02">y = 5 - 16 | -5</p>
                        <p className="tag-02"><span className="double_underline">y = -11</span></p>


                        <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir die Koordinaten des Schnittpunktes
                            herausgefunden. Als letztes noch etwas Wichtiges, was in
                            der Prüfung evtl. gefragt wird, ist der Schlussatz. Dieser soll noch geschrieben werden und
                            richtig dargestellt.<br/>
                            Beim Punkt P wird zuerst x geschrieben danach y!</p>
                        <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(8|-11).</b></p>
                    </p>

                    &nbsp;

                    {/*zweite Aufgabe*/}
                    <button className="collapsible" onClick={function () {
                        const inhalt = document.getElementById("inhalt1");
                        inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";
                    }}>
                        Substitutionsmethode zweites Beispiel
                    </button>
                    <p id="inhalt1" style={{display: "none"}}>
                        <h2 className="describtion-math">Substitutionsmethode zweites Beispiel</h2>
                        <p className="describtion-math">Hier schauen wir uns ein etwas schiwerigeres Beispiel der
                            Substitutionsmethode an.</p>

                        <p className="describtion-math"><b>Schritt 1: </b>Gegeben sind zwei Gleichungen. Auch hier
                            entscheiden wir uns im <u>ersten Schritt x herauszufinden.</u></p>
                        <p className="tag-02">(I) 2x + 3y = 27</p>
                        <p className="tag-02">(II) y = 4 + x</p>

                        <p className="describtion-math"><b>Schritt 2: </b>Wie wir bei der zweiten Gleichung sehen können,
                            ist y schon definiert. Das ist ein Vorteil, wenn y oder x definiert ist,
                            da wir das Einsetzungsverfahren(Substitutionsmethode) verwendet können. Dadurch kann y oder x
                            direkt in den anderen Term eingesetzen werden.</p>
                        <p className="tag-02">(I) 2x + 3<font color="red">y </font> = 4</p>
                        <p className="tag-02">(II) <font color="red">y </font> = 4 + x</p>

                        <p className="describtion-math"><b>Das ergibt:</b></p>
                        <p className="tag-02">2x + 3(4+x) = 27</p>

                        <p className="describtion-math"><b>Schritt 3: </b>Nun können wir anfangen zusammen zufassen.</p>
                        <p className="tag-02">2x + 2 + 3x = 27</p>
                        <p className="tag-02">5x + 12 = 27 | -12</p>
                        <p className="tag-02">5x = 15 | :5</p>
                        <p className="tag-02"><span className="double_underline">x = 3</span></p>

                        <p className="describtion-math"><b>Schritt 4: </b>Wir müssen nur noch y herausfinden, um den
                            kompletten Schnittpunkt zu bekommen. Dafür nehmen wir den
                            zweiten Tern und setzen x ein.</p>
                        <p className="tag-02">(II) y = 4 + x</p>
                        <p className="describtion-math">Anstelle von x (Da wir das schon haben) setzten wir nun 3 ein, da
                            x = 3 ergeben hat.</p>
                        <p className="tag-02">y = 4 + 3 |+3</p>
                        <p className="tag-02"><span className="double_underline">y = 7</span></p>


                        <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Koordinaten des Schnittpunktes
                            herausgefunden .Als letztes noch etwas Wichtiges, was in
                            der Prüfung evtl. gefragt ist, ist der Schlussatz. Dieser soll noch geschrieben werden und
                            richtig dargestellt.<br/>
                            Beim Punkt P wird zuerst x geschrieben danach y!</p>
                        <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(3|7)</b></p>

                    </p>

                    &nbsp;

                    <button className="collapsible" onClick={function () {
                        const inhalt = document.getElementById("inhalt2");
                        inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";
                    }}>
                        Substitutionsmethode schweres Beispiel
                    </button>
                    <p id="inhalt2" style={{display: "none"}}>
                        <h2 className="describtion-math">Substitutionsmethode schweres Beispiel</h2>
                        <p className="describtion-math">Hier schauen wir uns ein schweres Beispiel der
                            Substitutionsmethode an.</p>

                        <p className="describtion-math"><b>Schritt 1: </b>Gegeben sind zwei Gleichungen. Wir
                            entscheiden uns im <u>ersten Schritt y herauszufinden.</u></p>
                        <p className="tag-02">(I) 2x + 4y = 18</p>
                        <p className="tag-02">(II) 4x + 6y = 12</p>

                        <p className="describtion-math"><b>Schritt 2: </b>Diesmal gibt es nichts zum Einsetzen. Deshalb
                            müssen wir uns zuerst vorbereiten. Dafür nehmen wir den ersten Term und lösen diesen nach x auf.</p>
                        <p className="describtion-math"><b>Vorbereitung:</b></p>
                        <p className="tag-02">(I) 2x + 4y = 18 |:2</p>
                        <p className="tag-02">x + 2y = 9 |-2y</p>
                        <p className="tag-02">x = 9 - 2y</p>

                        <p className="describtion-math"><b>Zwischenstand:</b></p>
                        <p className="tag-02">(I) x = 9 - 2y</p>
                        <p className="tag-02">(II) 4x + 6y = 12</p>

                        <p className="describtion-math"><b>Schritt 3: </b>Nun können wir anfangen, y auszurechnen, indem wir
                            nun x einsetzen. Da wir dies vorher vorbereitet haben.</p>
                        <p className="tag-02">4(9 - 2x) + 6y = 12</p>
                        <p className="tag-02">36 - 8y + 6y = 12 | -6y</p>
                        <p className="tag-02">36 - 2y = 12 | -36</p>
                        <p className="tag-02">- 2y = -24 | :(-2)</p>
                        <p className="tag-02"><span className="double_underline">y = 12</span></p>

                        <p className="describtion-math"><b>Schritt 4: </b>Nun müssen wir noch x herausfinden, um den
                            kompletten Schnittpunkt zu bekommen. Dafür können wir den
                            vorbereiteten Term von x nehmen, dem Wert für y einsetzen und noch berechnen.</p>
                        <p className="tag-02">x = 9 - 2y</p>
                        <p className="describtion-math">Anstelle von y (Da wir das schon haben) setzten wir nun 12 ein,
                            da y = 12 ergeben hat.</p>
                        <p className="tag-02">x = 9 - 2(12)</p>
                        <p className="tag-02">x = 9 - 24 |-24</p>
                        <p className="tag-02"><span className="double_underline">x = -15</span></p>


                        <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Koordinaten des Schnittpunktes
                            herausgefunden haben. Als letztes noch etwas Wichtiges, was in
                            der Prüfung evtl. gefragt ist, ist der Schlussatz. Dieser soll noch geschrieben werden und
                            richtig dargestellt.<br/>
                            Beim Punkt P wird zuerst x geschrieben danach y!</p>
                        <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(-15|12)</b></p>

                    </p>
                </div>
                <br/>
            </section>
            <section id="schnittpunkt">
                <div className="container">
                <div className="tag-title">
                        <p style={{textAlign: "center"}}>
                            Grafische Darstellung des Schnittpunktes
                        </p>
                    </div>
                    <div className="row">
                        <div className="box">
                            <div className="box-inhalt">
                                Neben der rechnerischen Darstellung, kann der Schnittpunkt auch grafisch Dargestellt werden.
                                <br/>
                                    Das LGS, besteht aus mindestens zwei linearen Gleichungen. Um diese zu lösen, haben wir
                                    die zwei verschiedenen Lösungsverfahren angeschaut. Nach dem rechnerischen Verfahren können
                                    wir den Schnittpunkt auch noch <b>grafisch darstellen</b>. Dieser Schnittpunkt zeigt, wenn sich
                                    zwei Graphen von linearen Funktionen schneiden.
                                <br/>
                                <br/>
                                    Wenn wir die beiden Koordinaten x und y berechnet haben, bekommen wir den Schnittpunkt P. <br/>Diesen können 
                                    wir dann wie unten dargestellt aufzeichnen. Rechts wird nur der Schnittpunkt gezeigt und links sehen wir
                                    den Schnittpunkt mit zwei eingezeichneten Graphen.
                                <br/>
                                <img className="lgs-img" src={LGS2} alt={"LGS2"}/>
                                <img className="lgs-img" src={LGS} alt={"LGS"}/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="weiters">
                <div className="container">
                    <div className="tag-title">
                        <p style={{textAlign: "center"}}>
                            Weiteres
                        </p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="btn-txt-1"><b>Substitutionsmethode</b><br/>
                                Übungsblatt mit Aufgaben.
                            </div>
                            <div className="button-box">
                                <p style={{textAlign: "center"}}>
                                    <a onClick={saveFile} className="button" download>Download Arbeitsblatt</a>
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="btn-txt-1"><b>Substitutionsmethode</b><br/>
                                Lösungsblatt.
                            </div>
                            <div className="button-box">
                                <p style={{textAlign: "center"}}>
                                    <a className="button" onClick={saveFile1} download>Download Lösungsblatt</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p style={{textAlign: "center"}} className="box-inhalt">Wie oben schon erwähnt sind hier Youtube
                            Kanale welche dein Verständnis vertiefen können.</p>
                        <a target="_blank" href="https://www.youtube.com/channel/UCy0FxMgGUlRnkxCoNZUNRQQ">Lehrerschmidt
                            - Youtube</a><br/>
                        <a target="_blank" href="https://www.youtube.com/user/beckuplearning">Mathe by Daniel Jung -
                            Youtube</a><br/>
                        <a target="_blank" href="https://www.youtube.com/user/TheSimpleMaths">Mathe - simpleclub -
                            Youtube</a>
                        <br/>
                        <br/>
                        <a target="_blank" href="https://studyflix.de/mathematik/lineare-gleichungssysteme-2904">Studyflix
                            - Website</a><br/>
                        <a target="_blank" href="https://www.lehrer-schmidt.de/mathematik/lineare-gleichungssysteme/">Lehrer-schmidt
                            - Website</a><br/>
                        <a target="_blank"
                           href="https://www.maths2mind.com/schluesselwoerter/lineares-gleichungssystem-mit-2-variablen">math2mind
                            - Website</a><br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </section>
        </div>

    );
}

export default SUBM;