import Wave01 from "../../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css';
import LineareGleichungenBanner from "./banner";
import { saveAs } from "file-saver";
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
            "https://bzzch.sharepoint.com/:b:/r/teams/ABU20-Fachunterricht/Freigegebene%20Dokumente/Mathematik/WebseiteDateien/NadinaWebsite/L%C3%B6sungen_Ad.pdf?csf=1&web=1&e=sfzTFg",
          "Loesung_Sv.pdf.pdf"
        );
      };

    return (
        <div>
            {/*Banner*/}
            <LineareGleichungenBanner backbutton={true}/>
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"wave img"}/>
            </div>
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
                            <br></br>
                            Als erstes kannst du ein erstes Beispiel mit dem Lösungsverfahren Substitutionsmethode anschauen. Dieses ist Schritt für Schritt beschrieben und erklärt und einfach zu verstehen.<br></br>
                            Als zweites kannst du ein zweites Beispiel mit dem Lösungsverfahren Substitutionsmethode anschauen. Dieses benötigt die Grundkenntnisse der Substitutionsmethode damit du diese verstehst<br></br>
                            An dritter Stelle findest du ein Quiz mit verschiedenen Fragen sowie Aufgaben das du lösen kannst.<br></br>
                            Wer sich noch eine etwas kompliziertere Aufgabe anschauen möchte kann das gerne machen. Diese findest du unter 'schwereres Beispiel'.<br/>
                            Als letztes kannst du noch eine Blatt herunterladen welches weitere Aufgaben zum Lösen hat. Auch kannst du dir dazu die Lösungen herunterladen.<br></br>
                            Auch findest du noch Hilfreiche Webseiten sowie Youtube Kanale um dein Wissen zu vertiefen.
                            <br></br>
                            <br></br>
                            <b>Viel Spass beim lernen!</b>       
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
            <br></br>
            <section id="math">
            <div className="container">  
            <div className="tag-title">
                <p style={{textAlign: "center"}}>
                    Aufgaben
                </p>
            </div>
                <button className="collapsible" onClick={function () {
                    const inhalt = document.getElementById("inhalt");
                    inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";}}>
                    Substitutionsmethode erstes Beispiel
                </button>           
                <p id="inhalt" style={{display: "none"}}>
                    <h2 className="describtion-math">Substitutionsmethode einfaches Beispiel</h2>    
                    <p className="describtion-math">Als erstes schauen wir uns das erstes Beispiel der Substitutionsmethode an.</p>
            
                    <p className="describtion-math"><b>Schritt 1: </b>Als erstes braucht man zwei Gleichungen. Auch entscheiden wir uns im <u>ersten Schritt x herauszufinden.</u></p>
                    <p className="tag-02">(I) 6x + 4y = 4</p>
                    <p className="tag-02">(II) y = 5 - 2x</p>

                    <p className="describtion-math"><b>Schritt 2: </b>Wie wir bei der zweiten Gleichung sehen können ist y schon definiert. Das ist der Vorteil wenn y oder x definiert ist,
                    da wir das Einsetzungsverfahren(Substitutionsmethode) verwendet können. Man kann y oder x direkt in den anderen Term einsetzen.</p>
                    <p className="tag-02">(I) 6x + 4<font color="red">y </font> = 4</p>
                    <p className="tag-02">(II) <font color="red">y </font> = 5 - 2x</p>

                    <p className="describtion-math"><b>Was ergibt:</b></p>
                    <p className="tag-02">6x + 4(5-2x) = 4</p>

                    <p className="describtion-math"><b>Schritt 3: </b>Nun können wir anfangen zusammenfassen.</p>
                    <p className="tag-02">6x + 20 - 8x = 4 | -8x</p>
                    <p className="tag-02">-2x + 20 = 4 | -20</p>
                    <p className="tag-02">-2x = - 16 | :(-2)</p>
                    <p className="tag-02"><span className="double_underline">x = 8</span></p>

                    
                    <p className="describtion-math"><b>Schritt 4: </b>Nun müssen wir noch y herausfinden um dem kompletten Schnittpunkt zubekommen. Dafür nehmen wir den
                    zweiten Tern und setzen x ein.</p>
                    <p className="tag-02">(II) y = 5 - 2x</p>
                    <p className="describtion-math">Anstelle von x (Da wir das schon haben) setzten wir nun 8 ein da x = 8 ergeben hat.</p>
                    <p className="tag-02">y = 5 - 2(8)</p>
                    <p className="describtion-math">Nun können wir es wieder berechnen und danach Auflösen. Hierbei wir die Zahl wo vorher x stand mit der Zahl in der Klammer nun Multipliziert.</p>
                    <p className="tag-02">y = 5 - 16</p>
                    <p className="tag-02">y = 5 - 16 | -5</p>
                    <p className="tag-02"><span className="double_underline">y = -11</span></p>

                   
                    <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Schnittpunkte herausgefunden haben. Als letztes, noch etwas wichtiges was während
                    der Prüfung evtl. gefragt ist, ist der Schlussatz. Dieses soll noch geschrieben werden und richtig dargestellt.<br></br>
                    Beim Punkt P wird zuerst x geschrieben danach y!</p>
                    <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(8|-11)</b></p>
                    </p>

                    &nbsp;

                    {/*zweite Aufgabe*/}
                    <button className="collapsible" onClick={function () {
                    const inhalt = document.getElementById("inhalt1");
                    inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";}}>
                        Substitutionsmethode zweites Beispiel
                    </button>           
                    <p id="inhalt1" style={{display: "none"}}>
                    <h2 className="describtion-math">Substitutionsmethode zweites Beispiel</h2>    
                    <p className="describtion-math">Hier schauen wir uns ein das zweite Beispiel der Substitutionsmethode an.</p>
                        
                    <p className="describtion-math"><b>Schritt 1: </b>Als erstes braucht man zwei Gleichungen. Auch entscheiden wir uns im <u>ersten Schritt x herauszufinden.</u></p>
                    <p className="tag-02">(I) 2x + 3y = 27</p>
                    <p className="tag-02">(II) y = 4 + x</p>

                    <p className="describtion-math"><b>Schritt 2: </b>Wie wir bei der zweiten Gleichung sehen können ist y schon definiert. Das ist der Vorteil wenn y oder x definiert ist,
                    da wir das Einsetzungsverfahren(Substitutionsmethode) verwendet können. Man kann y oder x direkt in den anderen Term einsetzen.</p>
                    <p className="tag-02">(I) 2x + 3<font color="red">y </font> = 4</p>
                    <p className="tag-02">(II) <font color="red">y </font> = 4 + x</p>

                    <p className="describtion-math"><b>Was ergibt:</b></p>
                    <p className="tag-02">2x + 3(4-x) = 27</p>

                    <p className="describtion-math"><b>Schritt 3: </b>Nun können wir anfangen zusammenfassen.</p>
                    <p className="tag-02">2x + 4 - 3x = 27</p>
                    <p className="tag-02">5x + 12 = 27 | -12</p>
                    <p className="tag-02">5x = 15 | :5</p>
                    <p className="tag-02"><span className="double_underline">x = 3</span></p>
                    
                    <p className="describtion-math"><b>Schritt 4: </b>Nun müssen wir noch y herausfinden um dem kompletten Schnittpunkt zubekommen. Dafür nehmen wir den
                    zweiten Tern und setzen x ein.</p>
                    <p className="tag-02">(II) y = 4 + x</p>
                    <p className="describtion-math">Anstelle von x (Da wir das schon haben) setzten wir nun 3 ein da x = 3 ergeben hat.</p>
                    <p className="tag-02">y = 4 + 3 |+3</p>
                    <p className="tag-02"><span className="double_underline">y = 7</span></p>

                   
                    <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Schnittpunkte herausgefunden haben. Als letztes, noch etwas wichtiges was während
                    der Prüfung evtl. gefragt ist, ist der Schlussatz. Dieses soll noch geschrieben werden und richtig dargestellt.<br></br>
                    Beim Punkt P wird zuerst x geschrieben danach y!</p>
                    <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(3|7)</b></p>
                    
                    </p>

                    &nbsp;

                    <button className="collapsible" onClick={function () {
                    const inhalt = document.getElementById("inhalt2");
                    inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";}}>
                        Substitutionsmethode schweres Beispiel
                    </button>           
                    <p id="inhalt2" style={{display: "none"}}>
                    <h2 className="describtion-math">Substitutionsmethode schweres Beispiel</h2>    
                    <p className="describtion-math">Hier schauen wir uns ein das schwere Beispiel der Substitutionsmethode an.</p>
                        
                    <p className="describtion-math"><b>Schritt 1: </b>Als erstes braucht man zwei Gleichungen. Auch entscheiden wir uns im <u>ersten Schritt y herauszufinden.</u></p>
                    <p className="tag-02">(I) 2x + 4y = 18</p>
                    <p className="tag-02">(II) 4x + 6y = 12</p>

                    <p className="describtion-math"><b>Schritt 2: </b>Diesmal gitb es nichts zum einsetzen. Dafür müssen wir uns zuerst vorebereiten. Dafür nehmen wir den ersten Term.</p>
                    <p className="describtion-math"><b>Vorbereitung:</b></p>
                    <p className="tag-02">(I) 2x + 4y = 18 |:2</p>
                    <p className="tag-02">x + 2y = 9 |-2y</p>
                    <p className="tag-02">x = 9 - 2y</p>

                    <p className="describtion-math"><b>Zwischenstand:</b></p>
                    <p className="tag-02">(I) x = 9 - 2y</p>
                    <p className="tag-02">(II) 4x + 6y = 12</p>

                    <p className="describtion-math"><b>Schritt 3: </b>Nun können anfangen y auszurechnen, indem wir nun x eisnetzen können. Da wir das vorher vorbereitet haben.</p>
                    <p className="tag-02">4(9 - 2x) + 6y = 12</p>
                    <p className="tag-02">36 - 8y + 6y = 12 | -6y</p>
                    <p className="tag-02">36 - 2y = 12 | -36</p>
                    <p className="tag-02">- 2y = -24 | :(-2)</p>
                    <p className="tag-02"><span className="double_underline">y = 12</span></p>
                    
                    <p className="describtion-math"><b>Schritt 4: </b>Nun müssen wir noch x herausfinden um dem kompletten Schnittpunkt zubekommen. Dafür können wir den
                    vorbereiteten Term von x nehmen und nurnoch berechenen.</p>
                    <p className="tag-02">x = 9 - 2y</p>
                    <p className="describtion-math">Anstelle von y (Da wir das schon haben) setzten wir nun 12 ein da y = 12 ergeben hat.</p>
                    <p className="tag-02">x = 9 - 2(12)</p>
                    <p className="tag-02">x = 9 - 24 |-24</p>
                    <p className="tag-02"><span className="double_underline">x = -15</span></p>

                   
                    <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Schnittpunkte herausgefunden haben. Als letztes, noch etwas wichtiges was während
                    der Prüfung evtl. gefragt ist, ist der Schlussatz. Dieses soll noch geschrieben werden und richtig dargestellt.<br></br>
                    Beim Punkt P wird zuerst x geschrieben danach y!</p>
                    <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(-15|12)</b></p>
                    
                    </p>
              </div>
            <br></br>
        </section>
        <section id="Quiz">
            <div className="container">
            <h2>Substitutionsmethode Quiz</h2>
                <div className="container">
                   
                
                  
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
                                <div className="btn-txt-1"><b>Substitutionsmethode</b><br></br>
                                    Übungsblatt mit Aufgaben.
                                </div>
                                <div className="button-box">
                                    <p style={{textAlign: "center"}}>
                                    <a onClick={saveFile} className="button" download>Download Arbeitsblatt</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="btn-txt-1"><b>Substitutionsmethode</b><br></br>
                                    Lösungsblatt.
                                </div>
                                    <div className="button-box">
                                    <p style={{textAlign: "center"}}>
                                        <a className="button" onClick={saveFile1}  download>Download Lösungsblatt</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                <div className="box">
                        <p style={{textAlign: "center"}} className="box-inhalt">Wie oben schon erwähnt sind hier Youtube Kanale welche dein Verständnis vertiefen können.</p>
                        <a target="_blank" href="https://www.youtube.com/channel/UCy0FxMgGUlRnkxCoNZUNRQQ">Lehrerschmidt - Youtube</a><br></br>
                        <a target="_blank" href="https://www.youtube.com/user/beckuplearning">Mathe by Daniel Jung - Youtube</a><br></br>
                        <a target="_blank" href="https://www.youtube.com/user/TheSimpleMaths">Mathe - simpleclub - Youtube</a>
                        <br></br>
                        <br></br>
                        <a target="_blank" href="https://studyflix.de/mathematik/lineare-gleichungssysteme-2904">Studyflix - Website</a><br></br>
                        <a target="_blank" href="https://www.lehrer-schmidt.de/mathematik/lineare-gleichungssysteme/">Lehrer-schmidt - Website</a><br></br>
                        <a target="_blank" href="https://www.maths2mind.com/schluesselwoerter/lineares-gleichungssystem-mit-2-variablen">math2mind - Website</a><br></br>
                        <br></br>
                        <br></br>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </section>
        </div>

    );
}

export default SUBM;