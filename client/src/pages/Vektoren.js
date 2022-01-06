import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/vektoren/style.css'
import useDocumentTitle from "../utils/UseDocumentTitle";
import vectorsDontChangePerspective from '../img/vektoren/vectorsDontChangePerspective.gif'

const Vektoren = () => {
    useDocumentTitle('Vektoren');

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
                            <p style={{fontSize: "24px"}}><b>Vektoren</b></p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
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
                                Was die Vektoren speziell und in vielen verschiedenen Bereichen nützlich macht ist, das
                                sie sich nicht mit der Perspektive ändern. Sondern bleiben unverändert zum
                                Koordinatensystem.
                            </p>
                            <p>
                                Was bedeutet das?
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
                                     style={{margin: '10px', width: "100%"}}/>
                            </p>
                        </div>
                    </div>

                    <div className="myCard" id={"my top secret notes"}>
                        <div className={"container"}>
                            <h3>
                                hallo
                            </h3>
                        </div>
                        <div className={"container"}>hallo</div>
                    </div>
                </div>

                <div className="col">
                    <div className="myCard">
                        <div className="container">
                            <h4>Inhalt</h4>
                        </div>
                        <ul className="cardList">
                            <a href="#wasIstEinVektor">
                                <li className="listPadding">
                                    <span style={{fontSize: '18px'}}>Was ist ein Vektor?</span><br/>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vektoren;