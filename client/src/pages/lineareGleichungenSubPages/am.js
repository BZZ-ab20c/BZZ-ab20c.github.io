import LineareGleichungenBanner from "./banner2";
import Wave01 from "../../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css';
import useDocumentTitle from "../../utils/UseDocumentTitle";
import '../../styles/lineareGleichungen/index.css';
import React from 'react';



const AM = () => {
    useDocumentTitle('Linearegleichungen | AM');
    return (
        <div>
            {/*Banner*/}
            <LineareGleichungenBanner backbutton={true} className="btn"/>
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
                            Was lernst du alles auf dieser Seite über das Additonsverfahren?
                            <br></br>
                            Als erstes kannst du ein einfaches Beispiel mit dem Lösungsverfahren Additonsverfahren anschauen. Dieses ist Schritt für Schritt beschrieben und erklärt und einfach zu verstehen.<br></br>
                            Als zweites kannst du ein schweres Beispiel mit dem Lösungsverfahren Additonsverfahren anschauen. Dieses benötigt die Grundkenntnisse der Additionsmethode damit du diese verstehst<br></br>
                            And dritter Stelle findest du ein Quiz mit verschiedenen Fragen sowie Aufgaben das du lösen kannst. Die Lösung wird nach dem Klicken auf die Antwort angezeigt.<br></br>
                            Als letztes kannst du noch eine Blatt herunterladen welches weitere Aufgaben zum Lösen hat. AUch kannst du dir dazu die Lösungen herunterladen.<br></br>
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
                    Additonsverfahren einfaches Beispiel
                </button>           
                <p id="inhalt" style={{display: "none"}}>
                    <h2 className="describtion-math">Additonsverfahren einfaches Beispiel</h2>    
                    <p className="describtion-math">Als erstes schauen wir uns ein einfaches Beispiel des Additonsverfahrens an.</p>
            
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
                        Additonsverfahren schweres Beispiel
                    </button>           
                    <p id="inhalt1" style={{display: "none"}}>
                    <h2 className="describtion-math">Additonsverfahren schweres Beispiel</h2>    
                    <p className="describtion-math">Hier schauen wir uns ein schweres Beispiel des Additonsverfahrens an.</p>
                
                    <p className="describtion-math"><b>Schritt 1: </b>Als erstes braucht man zwei Linearefunktionen. Auch entscheiden wir uns im <u>ersten Schritt x herauszufinden.</u></p>
                    <p className="tag-02">(I) 20x - 16y = 88</p>
                    <p className="tag-02">(II) 25x - 26 = -8y</p>

                    <p className="describtion-math"><b>Schritt 2: </b>Um danach weiter machen zu können, müssen wir die zweite Gleichungen in die richtige Reihenfolge bringen. Dabei lassen wir die erste unebrührt.
                    Beim rechnen machen wir in diesem Schritt zwei Rechnungen gleichzeitigt. Als erstes rechnen wir |+26 und danach |+(-8y).</p>
                    <p className="tag-02">(I) 20x - 16y = 88</p>
                    <p className="tag-02">(II) 25x - 26 = -8y |+26</p>
                    <p className="tag-02">(II) 25x = -8y + 26 |+(-8y)</p>

                    <p className="describtion-math"><b>Was das ergibt :</b></p>
                    <p className="tag-02"><b>(II) 25x + 8y = 26 </b></p>

                    <p className="describtion-math">Und als letztes rechnen wir noch |x2 damit wir nachher zwei Zahlen miteinander auflösen können.</p>
                    <p className="tag-02">(II) 25x + 8y = 26 |x2</p>
                    <p className="tag-02">(II) 50x + 16y = 52</p>

                    <p className="describtion-math"><b>Schritt 3: </b>Nun können wur (I) 16y und (II) -16y <b><font color="red">auflösen </font></b>. Das ist der Sinn des Additionsverfahren, da man jetzt den Rest zusammenfassen kann.</p>
                    <p className="tag-02">(I) 20x - <font color="red">16y </font> = 88</p> 
                    <p className="tag-02">(II) 50x + <font color="red">16x </font>= 52 </p>
                    <p className="tag-02">70x = 140</p>

                    <p className="describtion-math"><b>Schritt 4: </b> Als letztes müssen wir nurnoch beides geteilt durch 70 zu renchen. Danach bekommen wir x den ersten Schnittpunkt von P.<br></br>
                    Rechnung: </p>
                    <p className="tag-02">70x = 140 |:70</p>
                    <p className="tag-02"><span className="double_underline">x = 2</span></p>

                    <p className="describtion-math"><b>Schritt 5: </b>Nun müssen wir noch y herausfinden um dem kompletten Schnittpunkt zubekommen. Wir nehmen dafür den Term (I).</p>
                    <p className="tag-02">(I) 20x - 16y = 88</p>
                    <p>Anstelle von x (Da wir das schon haben) setzten wir nun 2 ein da x = 2 ergeben hat.</p>
                    <p className="tag-02">(I) 20(2) - 16y = 88</p>
                    <p className="describtion-math">Nun können wir es wieder berechnen und danach Auflösen. Hierbei wir die Zahl wo vorher x stand mit der Zahl in der Klammer nun Multipliziert.</p>
                    <p className="tag-02">(I) 40x - 16y = 88</p>
                    <p className="tag-02">(I) 40x - 16y = 88 |-40</p> 
                    <p className="tag-02">(I) 16y = 48 |:(-16)</p>
                    <p className="tag-02"><span className="double_underline">y = -3 </span></p>

                    <p className="describtion-math"><b>Schritt 6: </b>Nun haben wir beide Schnittpunkte herausgefunden und x noch überprüft (Was im übrigen nicht notwenig ist). Als letztes, noch etwas wichtiges was während
                    der Prüfung evtl. gefragt ist, ist der Schlusssatz. Dieses soll noch geschrieben werden und richtig dargestellt.<br></br>
                    Beim Punkt P wird zuerst x geschrieben danach y!</p>
                    <p><b>Der Schnittpunkt von I und II liegt bei Punkt P(2|-3)</b></p>
                    </p>
              </div>
            <br></br>
        </section>
        <section id="Quiz">
            <div className="container">
            <h2>Additionsverfahren Quiz</h2>
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
                                <div className="btn-txt-1"><b>Additionsverfahren</b><br></br>
                                    Übungsblatt mit Aufgaben.
                                </div>
                                <div class="columns download">
                                <p>
                                    <a href="../../pages/Lösung_Ad.pdf" class="button" download><i class="fa fa-download"></i>Download Übungsblatt</a>
                                </p>
                            </div>
                            </div>
                            <div className="col">
                                <div className="btn-txt-1"><b>Additionsverfahren</b><br></br>
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

export default AM;