import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/vektoren/style.css'
import useDocumentTitle from "../utils/UseDocumentTitle";
import vectorsDontChangePerspective from '../img/vektoren/vectorsDontChangePerspective.gif'
import vectorArrow from '../img/vektoren/vectorArrow.png'
import vectorList from '../img/vektoren/vectorList.png'
import VektorenFragen from "./vektorenSubpages/VektorenFragen";
import Vektor from "./vektorenSubpages/Vektor";

const Vektoren = () => {
    useDocumentTitle('Vektoren');

    const inhaltStyle = {
        fontSize: '18px'
    }

    return (
        <div className={"container"}>
            <div className="container d-flex justify-content-center" style={{padding: '24px'}}>
                <h1>Vektoren</h1>
            </div>

            <div className={"col"}>
                <div className={"myCard"}>
                    <div className={"container"}>
                        <p>
                            Physiker, Fluglotsen und Spieleentwickler haben alle mindestens etwas gemeinsam.
                            <br/>
                            <span style={{fontSize: "24px"}}><b>Vektoren</b></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="myCard">
                    <div className="container">
                        <h4>Inhalt</h4>
                    </div>
                    <ul className="cardList">
                        <li className="listPadding">
                            <a href="#wasIstEinVektor">
                                <span style={inhaltStyle}>Was ist ein Vektor?</span><br/>
                            </a>
                        </li>
                        <li className="listPadding">
                            <a href="#wieSiehtErAus">
                                <span style={inhaltStyle}>Wie wird ein Vektor dargestellt?</span><br/>
                            </a>
                        </li>
                        <li className="listPadding">
                            <a href="#mathWithVectors">
                                <span style={inhaltStyle}>Mit Vektoren rechnen</span><br/>
                            </a>
                        </li>
                        <li className="listPadding">
                            <a href="#quizStart">
                                <span style={inhaltStyle}>Übungsaufgaben</span><br/>
                            </a>
                        </li>
                        <li className="listPadding">
                            <a href="#videoSources">
                                <span style={inhaltStyle}>Videos um Vektoren besser zu verstehen</span><br/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="myCard" id="wasIstEinVektor">
                        <div className="container">
                            <h3>Was ist ein Vektor?</h3>
                        </div>

                        <div className="container">
                            <p>
                                Um Vektoren zu verstehen müssen wir zuerst <b>Skalare</b> verstehen.
                                <br/>
                                Ein Skalar ist eine Menge mit Betrag. Er sagt uns wie viel von etwas existiert.
                                <br/>
                                Die Distanz zwischen dir und einem Baum aber auch das Volumen und die temperatur des
                                Getränkes in deinem Glas sind alle mit einem Skalar beschrieben.
                            </p>
                            <p>
                                Vektorengrössen haben auch eine Menge und eine weitere Information, Richtung.
                                <br/>
                                Um zu deinem Baum zu gelangen musst du wissen wie weit weg und in welcher Richtung er
                                ist.
                                <br/>
                                Nicht nur die Entfernung, sondern auch die Verschiebung.
                            </p>
                            <p>
                                Was die Vektoren speziell und in vielen verschiedenen Bereichen dadurch nützlich macht
                                ist, dass sie sich nicht mit der Perspektive ändern. Sondern bleiben unverändert zum
                                Koordinatensystem.
                            </p>
                            <p>
                                <b>Was bedeutet das?</b>
                                <br/>
                                Sagen wir du und dein Freund wollt zusammen euer Zelt verlegen. Ihr steht gegenüber,
                                schaut also in gegensätzliche Richtungen.
                                <br/>
                                Dein Freund geht zwei Schritte rechts und drei Schritte vorwärts während du zwei
                                Schritte rechts und 3 Schritte zurück gehst.
                                Auch wenn es aussieht als würdet ihr unterschiedlich laufen, lauft ihr beide die gleiche
                                Distanz in der gleichen Richtung. Ihr folgt dem gleichen Vektor.
                                <br/>
                                Egal in welche Richtung du schaust, oder welches Koordinatensystem ihr verwendet, der
                                Vektor ändert sich nicht.
                                <br/>
                                <img src={vectorsDontChangePerspective} alt="climate-change"
                                     style={{margin: '10px', width: "50%"}}/>
                            </p>
                        </div>
                    </div>

                    <div className="myCard" id={"wieSiehtErAus"}>
                        <div className={"container"}>
                            <h3>
                                Wie wird ein Vektor dargestellt?
                            </h3>
                        </div>
                        <div className={"container"}>
                            <p>
                                Vektoren können unterschiedlich dargestellt werden. Manche sehen einen Vektor als Pfeil,
                                andere als Liste von Zahlen. Aber am Ende ist es immer das gleiche.
                            </p>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <img style={{width: "150px"}} src={vectorArrow}
                                         alt={"Vektor als Pfeil dargestellt"}/>
                                </div>
                                <div className={"col"}>
                                    <img style={{width: "150px"}} src={vectorList}
                                         alt={"Vektor als Liste dargestellt"}/>
                                </div>
                            </div>
                            <p>
                                Wie wir vorhin gelesen haben sind Vektoren immer gleich, unabhängig
                                vom Koordinatensystem oder der Perspektive.
                                Sie haben immer eine Richtung und eine Entfernung. Im Beispiel vom Zelt vorhin, hat der
                                Vektor immer nach "oben rechts" gezeigt. Beide Personen sind 2 Schritte nach rechts, und
                                drei Schritte nach oben gelaufen. Dadurch hat der Vektor die Richtung "oben-rechts" und
                                eine gewissen Entfernung.
                                <br/>
                                Wer ein Vektor mit einem Pfeil darstellt würde einfach einen Pfeil machen der nach oben
                                rechts schaut und entsprechend der Entfernung lang ist.
                                Wer dafür mit Zahlen in einer Liste arbeitet würde es in etwa wie folgt machen:
                            </p>
                            <Vektor x={2} y={3}/>
                            <p>
                                Die erste Zahl ist X und das zweite ist Y. Beide Personen sind zwei Distanzeinheiten auf
                                der X Achse und drei Distanzeinheiten auf der Y Achse gelaufen.
                                Das ist ein zweidimensionaler Vektor. Die Dimension wird anhand der Zahlen bestimmt. Um
                                also einen dreidimensionalen Vektor zu haben fügt man einfach eine dritte Zahl, die
                                Z-Achse hinzu.
                                <br/>
                                Aber am Ende kann man diese Liste auch wieder als Pfeil darstellen, oder den Pfeil als
                                Liste.
                            </p>
                        </div>
                    </div>

                    <div className="myCard" id={"mathWithVectors"}>
                        <div className={"container"}>
                            <h3>
                                Mit Vektoren rechnen
                            </h3>
                        </div>
                        <div className={"container"}>
                            <p>
                                Mit Vektoren zu rechnen ist eigentlich ganz einfach. Folgend werden die
                                unterschiedlichen Methoden erklärt.
                                <br/>
                                Die Vektoren werden am einfachsten als Liste dargestellt um zu rechnen.
                            </p>

                            <div className={"row"}>
                                <div className={"col colBorderRight"}>
                                    <h4>Addieren/Subtrahieren</h4>
                                    <p>
                                        Wie beim normalen Rechnen brauchen wir hier mindestens zwei Vektoren um diese
                                        zusammen addieren oder subtrahieren zu können.
                                        <br/>
                                        Beim Addieren oder Subtrahieren wird jeweils die Zahl beim einen Vektor mit der
                                        Zahl an der selben Stelle beim anderen Vektor zusammen addiert oder subtrahiert.
                                        <br/>
                                        Gehen wir also von zwei zweidimensionalen Vektoren aus. Beide haben also ein X
                                        und ein Y. Wenn wir beide Vektoren addieren wollen addieren wir jeweils beide X
                                        und beide Y zusammen, das selbe beim subtrahieren.
                                    </p>

                                    <div className={"row"}>
                                        <h5>Addieren</h5>
                                        <div className={"col"}>
                                            <Vektor x={5} y={3}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>+</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={2} y={2}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={7} y={5}/>
                                        </div>
                                    </div>

                                    <div className={"row"}>
                                        <h5>Subtrahieren</h5>
                                        <div className={"col"}>
                                            <Vektor x={5} y={3}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>-</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={2} y={2}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={3} y={1}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <h4>Multiplizieren/Dividieren mit einem Skalar</h4>
                                    <p>
                                        Beim Multiplizieren und Dividieren gibt es unterschiedliche Möglichkeiten wie.
                                        Hier schauen wir uns die einfache Möglichkeit an, bei welchem wir einfach eine
                                        Zahl, einen Skalar, mit einem Vektor multiplizieren oder dividieren.
                                        <br/>
                                        Wenn man einen Vektor mit einer Zahl multiplizieren oder dividieren will, nimmt
                                        man einfach jeden Wert im Vektor und multipliziert oder dividiert diesen mit der
                                        Zahl.
                                    </p>

                                    <div className={"row"}>
                                        <h5>Vektor mit Skalar multiplizieren</h5>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>2</span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>*</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={5} y={3}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={10} y={6}/>
                                        </div>
                                    </div>

                                    <div className={"row"}>
                                        <h5>Vektor mit Skalar dividieren</h5>
                                        <div className={"col"}>
                                            <Vektor x={5} y={3}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>/</span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>2</span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={2.5} y={1.5}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"row rowBorderUp"}>
                                <div className={"col colBorderRight"}>
                                    <h4>Skalarprodukt</h4>
                                    <p>
                                        Man kann auch einen Vektor mit einem anderen Vektor multiplizieren.
                                        <br/>
                                        Vektor * Vektor ist das sogenannte Skalarprodukt.
                                        <br/>
                                        Um das Skalarprodukt zu erhalten, multipliziert ein Wert mit dem Wert beim
                                        anderen Vektor welcher an der selben Stelle liegt und addiert dann alle
                                        zusammen.
                                    </p>

                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <Vektor x={5} y={3}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>*</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={2} y={4}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>
                                                (5*2)+(3*4)
                                            </span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild bold"}>22</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <h4>Kreuz- oder Vektorprodukt</h4>
                                    <p>
                                        Um das sogenannte Kreuz- oder auch Vektorprodukt zu bekommen muss man zwei
                                        Vektoren miteinander kreuzen.
                                        <br/>
                                        Wir haben also z.B. folgende zwei Vektoren:
                                    </p>

                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <Vektor x={5} y={3}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>und</span>
                                        </div>
                                        <div className={"col"}>
                                            <Vektor x={2} y={4}/>
                                        </div>
                                    </div>

                                    <p>
                                        Diese zwei kreuzen wir jetzt.
                                        <br/>
                                        Beim Kreuzen multiplizieren wir zwei Werte von beiden Vektoren und subtrahieren
                                        diese von zwei anderen multiplizierten Werten.
                                        <br/>
                                        Das sieht dann wie folgt aus:
                                    </p>

                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <Vektor x={'5 * 4'} y={'-'} z={'3 * 2'}/>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>=</span>
                                        </div>
                                        <div className={"col centered"}>
                                            <span className={"centeredChild"}>
                                                (5*4) - (3 * 2) = <span className={"bold"}>14</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className={"myCard"} id={"quizStart"}>*/}
                    {/*    <div className={"container"}>*/}
                    {/*        <h3>Übungsaufgaben</h3>*/}
                    {/*    </div>*/}

                    {/*    <div className={"container"}>*/}
                    {/*        <VektorenFragen/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="myCard" id={"videoSources"}>
                        <div className={"container"}>
                            <h3>
                                Videos um Vektoren besser zu verstehen
                            </h3>
                        </div>
                        <h4>Deutsch</h4>
                        <div className={"row"}>
                            <div className={"col"}>
                                <p><b>Vektor, Vektoren, Definition</b></p>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/9C1OOlLng2Q"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className={"col"}>
                                <p><b>Rechnen mit Vektoren, Grundlagen, Basics</b></p>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/XKr6Qe9_trY"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col"}>
                                <p><b>Skalarprodukt und Länge (Betrag) eines Vektors, Vektorgeometrie</b></p>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/4O8-1zdXkEw"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className={"col"}>
                                <p><b>Vektorprodukt, Kreuzprodukt, vektorielles, äußeres Produkt, Formel</b></p>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/63FWetdwNb8"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>

                        <h4 className={"rowBorderUp"} style={{paddingTop: "20px"}}>Englisch</h4>
                        <div className={"row"}>
                            <div className={"col"}>
                                <p><b>Was ist ein Vektor?</b></p>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/ml4NSzCQobk"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                            <div className={"col"}>
                                <p><b>Was sind Vektoren? Die Essenz der Linearen Algebra</b></p>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/fNk_zzaMoSs"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vektoren;