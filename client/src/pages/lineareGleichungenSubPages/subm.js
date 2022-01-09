import Wave01 from "../../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css';
import LineareGleichungenBanner from "./banner";
import useDocumentTitle from "../../utils/UseDocumentTitle";

const SUBM = () => {
    useDocumentTitle('Linearegleichungen | SUBM');

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
                            <p>
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
                            And dritter Stelle findest du ein Quiz mit verschiedenen Fragen sowie Aufgaben das du lösen kannst.<br></br>
                            Als letztes kannst du noch eine Blatt herunterladen welches weitere Aufgaben zum Lösen hat. Auch kannst du dir dazu die Lösungen herunterladen.<br></br>
                            Auch findest du noch Hiflreiche Webseiten sowie Youtube Kanale um dein Wissen zu vertiefen.
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
                <p>
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
            
                    <p className="describtion-math"><b>Schritt 1: </b>Als erstes braucht man zwei Gleichungen. Auch entscheiden wir uns im <u>ersten Schritt y herauszufinden.</u></p>
                    <p className="tag-02">(I) 2x + 3y = 9</p>
                    <p className="tag-02">(II) 3x - 4y = 5</p>

                    <p className="describtion-math"><b>Schritt 2: </b>Als nächstes überlegen wir uns, wie wir die Zahlen: (I) 2x und (II) 3x dargestellt bekommen, damit sich diese gegenseitig
                        addieren un dabei auflösen. Dafür rechnen wir beim Term (I) |x3 und bei Term (II) |x(-2) .</p>
                    <p className="tag-02">(I) 2x + 3y = 9 |x3</p>
                    <p className="tag-02">(II) 3x - 4y = 5 |x(-2)</p>

                    <p className="describtion-math"><b>Was das ergibt :</b></p>
                    <p className="tag-02">(I) 6x + 9y = 27</p>
                    <p className="tag-02">(II) -6x + 8y = -10 </p>

                    <p className="describtion-math"><b>Schritt 3: </b>Nun können wir (I) 6x und (II) -6x <b><font color="red">auflösen </font></b>. Das ist der Sinn des Additionsverfahren, da man jetzt den Rest zusammenfassen kann.</p>
                    <p className="tag-02">(I) <font color="red">6x </font> + 9y = 27</p> 
                    <p className="tag-02">(II) <font color="red">-6x </font> + 8y = -10 </p>
                    <p className="tag-02">17y = 17</p>

                    <p className="describtion-math"><b>Schritt 4: </b> Als letztes müssen wir nur noch beides geteilt durch 17 zu rechen. Danach bekommen wir y den ersten Schnittpunt von P.<br></br>
                    Rechnung: </p>
                    <p className="tag-02 ">17y = 17 |:17</p>
                    <p className="tag-02"><span className="double_underline">y = 1</span></p>

                    
                    <p className="describtion-math"><b>Schritt 5: </b>Nun müssen wir noch x herausfinden um dem kompletten Schnittpunkt zubekommen. Dafür können wir eine der beiden Termen (I) oder (II) nehmen. 
                    In diesem Beispiel werden wir beide durchgehen was als Kontrolle des Ergebnisses dienen kann. Wir nehmen als erstes dafür jetzt den Term (I).</p>
                    <p className="tag-02">(I) 2x + 3y = 9</p>
                    <p className="describtion-math">Anstelle von y (Da wir das schon haben) setzten wir nun 1 ein da y = 1 ergeben hat.</p>
                    <p className="tag-02">(I) 2x + 3(1) = 9</p>
                    <p className="describtion-math">Nun können wir es wieder berechnen und danach Auflösen. Hierbei wir die Zahl wo vorher y stand mit der Zahl in der Klammer nun Multipliziert.</p>
                    <p className="tag-02">(I) 2x + 3 = 9</p>
                    <p className="tag-02">2x + 3 = 9 |-3</p>
                    <p className="tag-02">2x = 6 |:2</p>
                    <p className="tag-02"><span className="double_underline">x = 3 </span></p>

                    <p className="describtion-math"><b>Überprüfung: </b>Die Überprüfung mit Term II. Hier wir der selbe Durchgang angwendet wie bei <b>Schritt 5 !</b></p>
                    <p className="tag-02">(II) 3x - 4y = 5</p>
                    <p className="tag-02">3x - 4(y) = 5 |+4</p>
                    <p className="tag-02">3x = 9 |:3</p>
                    <p className="tag-02"><span className="double_underline">x = 3 </span></p>
                    <p className="text-align: center;">Selbes Ergebniss wie mit Term I.</p>
                    <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Schnittpunkte herausgefunden und x noch überprüft (Was im übrigen nicht notwenig ist). Als letztes, noch etwas wichtiges was während
                    der Prüfung evtl. gefragt ist, ist der Schlusssatz. Dieses soll noch geschrieben werden und richtig dargestellt.<br></br>
                    Beim Punkt P wird zuerst x geschrieben danach y!</p>
                    <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(3|1)</b></p>
                    </p>

                    &nbsp;

                    {/*schwere Aufgabe*/}
                    <button className="collapsible" onClick={function () {
                    const inhalt = document.getElementById("inhalt1");
                    inhalt.style.display = (inhalt.style.display === "none") ? "block" : "none";}}>
                        Substitutionsmethode zweites Beispiel
                    </button>           
                    <p id="inhalt1" style={{display: "none"}}>
                    <h2 className="describtion-math">Substitutionsmethode zweites Beispiel</h2>    
                    <p className="describtion-math">Hier schauen wir uns ein das zweite Beispiel der Substitutionsmethode an.</p>
                
                    
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
                    <p>
                        Weiteres
                    </p>
                </div><div className="row">
                            <div className="col">
                                <div className="btn-txt-1"><b>Substitutionsmethode</b><br></br>
                                    Übungsblatt mit Aufgaben.
                                </div>
                                <div class="columns download">
                                <p>
                                    <a href="../../pages/Lösung_Ad.pdf" class="button" download><i class="fa fa-download"></i>Download Übungsblatt</a>
                                </p>
                            </div>
                            </div>
                            <div className="col">
                                <div className="btn-txt-1"><b>Substitutionsmethode</b><br></br>
                                    Lösungsblatt.
                                </div>
                                <div class="columns download">
                                <p>
                                    <a href="../../pages/Übungen_Ad.pdf" class="button" download><i class="fa fa-download"></i>Download Lösungsblatt</a>
                                </p>
                            </div>
                            </div>
                        </div>
                <div className="box">
                        <p className="box-inhalt">Wie oben schon erwähnt sind hier Youtube Kanale welche dein Verständnis vertiefen können.</p>
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