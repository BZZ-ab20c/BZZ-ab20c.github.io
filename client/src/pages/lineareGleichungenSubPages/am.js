import LineareGleichungenBanner from "./banner";
import Wave01 from "../../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css';
import useDocumentTitle from "../../utils/UseDocumentTitle";
import React from 'react';
import Collapsible from 'react-collapsible';
import { Accordion } from "react-bootstrap";

const AM = () => {
    useDocumentTitle('Linearegleichungen | AM');

    return (
        <div>
            {/*Banner*/}
            <LineareGleichungenBanner backbutton={true}/>
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"wave img"}/>
            </div>
            <section id="math">
            <div className="container">  
                    <h2>Additonsverfahren einfaches Beispiel</h2>    
                    <p>Als erstes schauen wir uns ein einfaches Beispiel des Additonsverfahrens an.</p>
            
                    <p><b>Schritt 1: </b>Als erstes braucht man zwei linearefunktionen. Ach entscheiden wir uns im <u>ersten Schritt y herauszufinden.</u></p>
                    <p className="tag-02">(I) 2x + 3y = 9</p>
                    <p className="tag-02">(II) 3x - 4y = 5</p>

                    <p><b>Schritt 2: </b>Als nächstes überlegen wir uns, wie wir die Zahlen: (I) 2x und (II) 3x dargestellt bekommen, damit sich diese gegenseitig
                        addieren un dabei auflösen. Dafür rechnen wir beim Term (I) |x3 und bei Term (II) |x(-2) .</p>
                    <p className="tag-02">(I) 2x + 3y = 9 |x3</p>
                    <p className="tag-02">(II) 3x - 4y = 5 |x(-2)</p>

                    <p><b>Was das ergibt :</b></p>
                    <p className="tag-02">(I) 6x + 9y = 27</p>
                    <p className="tag-02">(II) -6x + 8y = -10 </p>

                    <p><b>Schritt 3: </b>Nun können wur (I) 6x und (II) -6x <b><font color="red">auflösen </font></b>. Das ist der Sinn des Additionsverfahren, da man jetzt den Rest zusammenfassen kann.</p>
                    <p className="tag-02">(I) <font color="red">6x </font> + 9y = 27</p> 
                    <p className="tag-02">(II) <font color="red">-6x </font> + 8y = -10 </p>
                    <p className="tag-02">17y = 17</p>

                    <p><b>Schritt 4: </b> Als letztes müssen wir nurnoch beides geteilt durch 17 zu rechen. Danach bekommen wir y den ersten Schnittpunt von P.<br></br>
                    Rechnung: </p>
                    <p className="tag-02 ">17y = 17 |:17</p>
                    <p className="tag-02"><span className="double_underline">y = 1</span></p>

                    
                    <p><b>Schritt 5: </b>Nun müssen wir noch x herausfinden um dem kompletten Schnittpunkt zubekommen. Dafür können wir eine der beiden Termen (I) oder (II) nehmen. 
                    In diesem Beispiel werden wir beide durchgehen was als Kontrolle des Ergebnisses dienen kann. Wir nehmen als erstes dafür jetzt den Term (I).</p>
                    <p className="tag-02">(I) 2x + 3y = 9</p>
                    <p>Anstelle von y (Da wir das schon haben) setzten wir nun 1 ein da y = 1 ergeben hat.</p>
                    <p className="tag-02">(I) 2x + 3(1) = 9</p>
                    <p>Nun können wir es wieder berechnen und danach Auflösen. Hierbei wir die Zahl wo vorher y stand mit der Zahl in der Klammer nun Multipliziert.</p>
                    <p className="tag-02">(I) 2x + 3 = 9</p>
                    <p className="tag-02">2x + 3 = 9 |-3</p>
                    <p class="tag-02">2x = 6 |:2</p>
                    <p className="tag-02"><span className="double_underline">x = 3 </span></p>

                    <p><b>Überprüfung: </b>Die Überprüfung mit Term II. Hier wir der selbe Durchgang angwendet wie bei <b>Schritt 5 !</b></p>
                    <p className="tag-02">(II) 3x - 4y = 5</p>
                    <p className="tag-02">3x - 4(y) = 5 |+4</p>
                    <p className="tag-02">3x = 9 |:3</p>
                    <p className="tag-02"><span className="double_underline">x = 3 </span></p>
                    <p className="text-align: center;">Selbes Ergebniss wie mit Term I.</p>
                    <p><b>Schritt 6: </b>Nun haben wir beide Schnittpunkte herausgefunden und x noch überprüft (Was im übrigen nicht notwenig ist). Als letztes, noch etwas wichtiges was während
                    der Prüfung evtl. gefragt ist, ist der Schlusssatz. Dieses soll noch geschrieben werden und richtig dargestellt.<br></br>
                    Beim Punkt P wird zuerst x geschrieben danach y!</p>
                    <p><b>Der Schnittpunkt von I und II liegt bei Punkkt P(3|1)</b></p>
              </div>
        </section>
        </div>
    );
}

export default AM;