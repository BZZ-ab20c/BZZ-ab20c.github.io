import MathImg from "../img/lineargleichungen/math-img.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/lineareGleichungen/index.css';
import {Link} from "react-router-dom";
import LineareGleichungenBanner from "./lineareGleichungenSubPages/banner";
import useDocumentTitle from "../utils/UseDocumentTitle";

const Linearegleichungen = () => {
    useDocumentTitle('Linearegleichungen');

    return (
        <div>
            <LineareGleichungenBanner title={'Lineare Gleichungssysteme'} backbutton={false}/>
            <section id="second-banner">
                <div className="container">
                    <div className="col-01">
                        <p>
                            <h2>Inhalt</h2>
                        </p>
                    </div>
                </div>
            </section>
            <section id="section-txt">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>
                                Das erste was man sich fragt wenn man LGS hört, ist :<strong> Was ist
                                LGS?</strong><br/>
                                LGS heisst ausgeschrieben «<b>L</b>ineare <b>G</b>leichungs<b>s</b>ysteme». Unter einem
                                Gleichungssystem versteht man zwei oder mehr Gleichungen, welche gemeinsam gelöst werden
                                müssen.
                                Gleichungen setzen sich aus gemeinsamen Unbekannten (Variablen) zusammen. Linear heisst,
                                dass jede Variable höchstens mit dem Exponenten 1 auftaucht!
                                <br/><br/>
                                Besitzt ein Gleichungssystem mehr Gleichungen als unbekannte Variablen, kann dieses
                                meist nicht eindeutig gelöst werden,
                                Zum Beispiel gibt es drei Unbekannte aber nur zwei Gleichungen. In diesem Fall spricht
                                man von einem <b>unterbestimmten Gleichungssystem</b>.
                                Es kann vorkommen das bei diesen Gleichungssystem keine Lösung berechnet werden kann.
                                <br/><br/>
                                Bei einem Gleichungssystem, welches genau gleich viele unbekannte Variablen wie
                                Gleichungen besitzt, kann im Allgemeinen exakt eine Lösung bestimmt werden,
                                das Gleichungssystem ist also <b>eindeutig lösbar</b>. Dies ist der Normalfall.
                                <br/><br/>
                                <b/>Ziel bei der Berechnung ist es, für jede Variable eine Zahl zu finden, die alle
                                Gleichungen korrekt löst.
                            </p>
                        </div>
                        <div className="col">

                            <img className="math-img" src={MathImg} alt={"Math img or something idk"}/>

                        </div>
                    </div>
                </div>
            </section>
            <section id="section-btn-title">
                <div className="container">
                    <div className="row">
                        <div className="tag-title">
                            <p>
                                Systeme
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tag-03">
                            Um diese Gleichungen lösen zu können, braucht man ein Lösungsverfahren. Insgesamt gibt es
                            drei, hier werden wir zwei etwas genauer anschauen.
                            Einmal die Additionsmethode und die Substitutionsmethode.
                            <br/>
                            Wann ein bestimmtes Verfahren benutzt wird, ist abhängig vom Gleichungssystem. Das
                            entscheidet nur den Rechenaufwand.
                            Schlussendlich führen alle zur richtigen Lösung (natürlich, solange man richtig rechnet).
                        </div>
                    </div>
                </div>
                <section id="btn-title">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="btn-txt-1"><b>Additionsmethode</b><br/> (Verfahren gleicher
                                    Koeffizienten) <br/>
                                    Wenn zwei "entgegengesetzte Summanden" vorkommen.
                                </div>
                            </div>
                            <div className="col">
                                <div className="btn-txt-2"><b>Substitutionsmethode</b><br/> (Einsetzungsverfahren) <br/>
                                    <div className="red">
                                        Text überarbeitung
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section id="section-btn">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="btn-01">
                                <Link to={"/linearegeleichungen/AM"} className="link">
                                    <div className="btn-01-1">
                                        <p className="btn-01-1-txt">Additionsmethode</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="btn-02">
                                <Link to={"/linearegeleichungen/SUBM"} className="link">
                                    <div className="btn-02-2">
                                        <p className="btn-02-2-txt">Subtitutionsmethode</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Linearegleichungen;