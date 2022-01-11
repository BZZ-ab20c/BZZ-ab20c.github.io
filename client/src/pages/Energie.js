import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/energie/style.css'
import '../styles/energie/EnergieStyle.css'
import titleImage from "../img/energie/titleImage.jpg";
import bewegungsEnergie from "../img/energie/bewegungsEnergieImage.png";
import kernenergie from "../img/energie/Kernenergie.jfif";
import strahlungsenergie from "../img/energie/Strahlungsenergie.jfif";
import visibilityImage from "../img/energie/visibility.svg";
import visibilityImageOff from "../img/energie/visibility_off.svg";
import useDocumentTitle from "../utils/UseDocumentTitle";

const Energie = () => {
    useDocumentTitle('Energie');

    let button1Visible = false;
    let button2Visible = false;
    let button3Visible = false;

    return (
        <div>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <div className="title-section">
                    <img draggable="false" src={titleImage} alt={"Bild zur darstellung der Energie"}
                         className="fade-left"/>
                    <h1 className="top-right">Energie</h1>
                    <dl className="top-left">
                        <dt>Worum es geht:</dt>
                        <dd>- Bedeutung der Energie</dd>
                        <dd>- Energieformen</dd>
                        <dd>- Primärenergie</dd>
                        <dd>- Sekundärenergie</dd>
                        <dd>- Nicht erneuerbare und erneuerbare Energie</dd>
                        <dd>- Fragen & Antworten</dd>
                    </dl>
                </div>
                <br/>
                <h4>Bedeutung</h4>
                <br/>
                <p>Der Begriff Energie kommt aus dem Griechischen und bedeutet so viel wie „wirkende Kraft“. Energie
                    findet man überall und ist eine Kraft, die etwas bewirken kann. Auch wenn man sie nicht sehen oder
                    anfassen kann, wäre ein Leben ohne nicht möglich. Pflanzen, Tiere und Menschen benötigen Energie zum
                    Überleben.</p>
                <br/>
                <br/>
                <br/>
                <dl>
                    <dt>Energie kommt in verschiedenen Formen vor:</dt>
                    <br/>
                    <dd>Bewegungsenergie / Kinetische Energie</dd>
                    <dd>Lageenergie / Potentielle Energie</dd>
                    <dd>Wärmeenergie / Thermische Energie</dd>
                    <dd>Elektrische Energie</dd>
                    <dd>Kernenergie</dd>
                    <dd>Strahlungsenergie</dd>
                    <dd>Chemische Energie</dd>
                </dl>
                <br/>
                <b>Die verschiedenen Energieformen können ineinander umgewandelt werden.</b>
                <br/>
                <br/>
                <h4>Bedeutung der einzelnen Energieformen</h4>
                <br/>
                <div className="row">
                    <div className="col-6">
                        <h5>Bewegungsenergie / Kinetische Energie</h5>
                        <p>Diese Energieform liegt immer vor, wenn sich etwas
                            bewegt. Bewegungsenergie ist häufig das Ziel von Energieumwandlungen. Beim Auto wird die
                            chemische Energie des
                            Treibstoffs zunächst in Wärme und dann in
                            Bewegungsenergie des Fahrzeugs umgewandelt.
                            <br/>
                            <br/>
                            Die Einheit der kinetischen Energie ist das Joule: [Ekin]=1J
                            <br/>
                            <br/>
                            Die kinetische Energie Ekin eines Körpers ist proportional zu seiner Masse m und
                            proportional zum Quadrat v2 seiner Geschwindigkeit
                            <br/>
                            <br/>
                            Also für die kinetische Energie eines Körpers gilt Ekin=12⋅m⋅v2.</p>
                        <br/>
                        <br/>
                        <img draggable="false" src={bewegungsEnergie} alt={"Darstellung Bewegungsenergie"}
                             style={{width: "650px"}}/>
                    </div>
                    <div className="col-6">
                        <h5>Mechanische Lageenergie / Potentielle Energie</h5>
                        <p>Die Energie, die ein Körper aufgrund seiner Höhe besitzt, nennt man Lageenergie. Zum Beispiel
                            ein Kind auf einem Ast. Diese kann wieder in Bewegungsenergie
                            umgewandelt werden, in dem man den Gegenstand auf ein
                            niedrigeres Niveau fallen lässt.
                            <br/>
                            <br/>
                            Die potentielle Energie Epot "eines Körpers" ist proportional zu seiner Masse m, dem
                            Ortsfaktor g und zur Höhe h des Körpers über einem definierten Nullniveau
                            <br/>
                            <br/>
                            Für die potentielle Energie gilt Epot=m⋅g⋅h</p>
                    </div>
                </div>
                <br/>
                <br/>
                <h4>Wärmeenergie / Thermische Energie</h4>
                <br/>
                <p>Die Definition von Wärmeenergie beschreibt das innere Wärmepotenzial eines Stoffes. Der Wert der
                    Wärmeenergie hängt vor
                    allem vom
                    Temperaturniveau ab. Je höher die Temperatur ist
                    , desto größer ist der Anteil der
                    Wärme, der in kinetische oder elektrische Energie
                    umgewandelt
                    werden kann. Mit Temperaturen von einigen hundert
                    Grad lassen sich vielfältige technische Prozesse
                    bewirken,
                    z.B. das Brennen von Zement oder die
                    Stahlherstellung. Geringe Temperaturen sind nur noch
                    zum Heizen von
                    Wohnungen geeignet.
                    <br/>
                    <br/>
                    Wenn Wärmeenergie oder thermische Energie zu berechnen ist, setzt sich die grundlegende Formel aus vier Variablen zusammen:
                    <br/>
                    <br/>
                    ?Q = Die Energiemenge in Joule
                    <br/>
                    <br/>
                    m = Die Masse des Körpers/Stoffs in Kilogramm
                    <br/>
                    <br/>
                    c = Die im Körper/Stoff vorhandene Wärmekapazität in Joule/kg multipliziert mit Kelvin
                    <br/>
                    <br/>
                    ?T = Die Temperatur in Kelvin
                    <br/>
                    <br/>
                    Die Rechenformel für das Berechnen thermischer Energie lautet ?Q = m x c x ?T</p>
                <br/>
                <br/>
                <h4>Elektrische Energie</h4>
                <br/>
                <p>Elektrische Energie ist Energie, die mit Elektrizität übertragen oder gespeichert wird. Im Grunde
                    handelt es sich bei elektrischer Energie also um eine Fähigkeit des elektrischen Stroms. Sie hat
                    den Nachteil, dass sie nur mit
                    großem Aufwand in größeren Mengen
                    gespeichert werden kann und immer
                    zum Zeitpunkt des Verbrauchs erst
                    aus anderen Energieformen
                    hergestellt werden
                    muss. Dabei treten oft große
                    Umwandlungsverluste auf.
                <br/>
                    <br/>
                    P ist die elektrische Leistung in Watt, U die elektrische Spannung in Volt und I die elektrische Stromstärke in Ampere.
                <br/>
                    <br/>
                    Die Rechenformel für das Berechnen elektrischer Energie lautet P = U · I
                </p>
                <br/>
                <br/>
                <h4>Kernenergie</h4>
                <br/>
                <p>Mit Kernenergie wird die Energie bezeichnet, die in Atomkernen enthalten ist. Bei der Nutzung der
                    Atomenergie kommt es zu
                    Reaktionen der
                    Atomkerne,
                    wodurch sehr große
                    Energiemengen frei
                    werden. Es entsteht
                    aber auch die für
                    den Menschen sehr
                    schädliche
                    Radioaktivität, vor
                    der man sich nur mit
                    sehr großem Aufwand
                    schützen kann.
                    Bei der
                    Umwandlung in
                    elektrische Energie
                    treten etwa 70%
                    Wärmeverluste auf,
                    die zur Aufheizung
                    der Flüsse führen.
                </p>
                <br/>
                <img src={kernenergie} alt={"darstellung von atomkraftwerken"}/>
                <br/>
                <br/>
                <h4>Strahlungsenergie</h4>
                <br/>
                <p>Die Strahlungsenergie bezeichnet die Energie elektromagnetischer Wellen. Als elektromagnetische Welle
                    bezeichnet man eine Welle aus gekoppelten elektrischen und magnetischen Feldern. Elektromagnetische
                    Wellen sind unsichtbar und bewegen sich mit Lichtgeschwindigkeit fort. Durch die Anzahl der
                    Schwingungen pro Sekunde erkennt man bei elektromagnetischen Wellen die Frequenz.Zur Stromerzeugung
                    wird vor allem die Strahlungsenergie der Sonne ausgenutzt. Die auf die Erdoberfläche auftreffende
                    Sonnenenergie hängt von den Wetterbedingungen ab. </p>
                <br/>
                <img src={strahlungsenergie} alt={"darstellung von sollarenergie"}/>
                <br/>
                <br/>
                <h4>Primärenergie</h4>
                <br/>
                <p>Als Primärenergie bezeichnet man die Energieträger, die direkt aus der Natur kommen.
                    Es sind Energieträger in ihrer ursprünglichen Form und nur vermindert als Energiequellen nutzbar.
                    Die in der Primärenergie enthaltende Energie steckt noch in einer natürlich vorkommenden
                    Energiequelle und muss erst durch Umwandlungsprozesse nutzbar gemacht werden.
                    <br/>
                    <br/>
                    Zu den Primärenergien gehören vor allem fossile Brennstoffe, zum Beispiel:
                    <br/>
                    - Braunkohle
                    <br/>
                    - Steinkohle
                    <br/>
                    - Erdgas
                    <br/>
                    - Erdöl
                    <br/>
                    - Holz</p>
                <h4>Sekundärenergie</h4>
                <br/>
                <p>Sekundärenergie umfasst die Arten von Energie, die nicht direkt aus der Natur stammen. So gesehen,
                    handelt es sich also um umgewandelte Primärenergie. Bei der Umwandlung zu Sekundärenergieträgern
                    sind Energieverluste hinzunehmen.
                    <br/>
                    <br/>
                    Beispiele für Sekundärenergie:
                    <br/>
                    - Erdöl wird zu Heizöl
                    <br/>
                    - Benzin und Flüssiggas weiterverarbeitet
                    <br/>
                    - Kohlebriketts für Öfen
                    <br/>
                    - Kokereigas
                    <br/>
                    - Holzkohle zum Grillen</p>
                <br/>
                <br/>
                <h4>Nicht
                    erneuerbare
                    und
                    erneuerbare
                    Energien</h4>
                <br/>
                <p>Nicht erneuerbare Energien sind Energien, die aus nicht erneuerbaren Ressourcen erzeugt werden. Eine Gruppe von Ressourcen, die nach ihrer Verwendung nicht wiederhergestellt werden können. Diese Ressourcen umfassen hauptsächlich fossile Brennstoffe (Kohle, Öl, Erdgas), Kernbrennstoffe und Biokraftstoffe.
                    Derzeit werden nicht erneuerbare fossile Brennstoffe als Hauptenergiequelle vom Menschen genutzt. Seit dem 19. Jahrhundert, mit der Ankunft von Verbrennungsmotoren, sind Öl und andere fossile Brennstoffe ständig gefragt. Der ständige Einsatz fossiler Brennstoffe hat zu einer globalen Erwärmung und einem starken Klimawandel geführt.
                <br/>
                <br/>
                </p>
                <br/>
                <p>Eine Energieform wird erneuerbar genannt, wenn sich die Ressourcen für ihre Bereitstellung kurzfristig erneuern. Es gibt fünf verschiedene Arten an Erneuerbaren Energiequellen: Solarenergie, Windenergie, Wasserkraft, Biomasse und Erdwärme.</p>
                <br/>
                <br/>
                <h4>Fragen</h4>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Frage</th>
                        <th scope="col">Antwort</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            Wie nennt man Wärmeenergie ebenfalls?
                        </td>
                        <td className="antworten">
                            <span style={{display: "none"}} id="antwort-1">
                                <b>Thermische Energie</b>
                            </span>
                        </td>
                        <td>
                            <button id="button-1" type="button" className="btn btn-primary" onClick={function () {
                                const ANSWER = document.getElementById("antwort-1");
                                ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                                const BUTTON_IMAGE = document.getElementById('button1_image');

                                if (button1Visible) {
                                    BUTTON_IMAGE.setAttribute('src', visibilityImage);
                                    BUTTON_IMAGE.setAttribute('alt', 'Nicht sichtbar');
                                } else {
                                    BUTTON_IMAGE.setAttribute('src', visibilityImageOff);
                                    BUTTON_IMAGE.setAttribute('alt', 'Sichtbar');
                                }
                                button1Visible = !button1Visible;
                            }}>
                                <img id="button1_image" src={visibilityImage} alt={"Auge Symbol"}/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>
                            Ist Kohle erneuerbar oder nicht erneuerbar?
                        </td>
                        <td className="antworten">
                <span style={{display: "none"}} id="antwort-2">
                    <b>Nicht erneuerbar</b>
                </span>
                        </td>
                        <td>
                            <button
                                id="button-2"
                                type="button"
                                className="btn btn-primary"
                                onClick={function () {
                                    const ANSWER = document.getElementById("antwort-2");
                                    ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                                    const BUTTON_IMAGE = document.getElementById('button2_image');

                                    if (button2Visible) {
                                        BUTTON_IMAGE.setAttribute('src', visibilityImage);
                                        BUTTON_IMAGE.setAttribute('alt', 'Nicht sichtbar');
                                    } else {
                                        BUTTON_IMAGE.setAttribute('src', visibilityImageOff);
                                        BUTTON_IMAGE.setAttribute('alt', 'Sichtbar');
                                    }
                                    button2Visible = !button2Visible;
                                }}>
                                <img id="button2_image" src={visibilityImage}
                                     alt="Auge Symbol"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>
                            Was ist die Einheit für die elektrische Spannung in Volt?
                        </td>
                        <td className="antworten">
                <span style={{display: "none"}} id="antwort-3">
                    <b>U</b>
                </span>
                        </td>
                        <td>
                            <button
                                id="button-3"
                                type="button"
                                className="btn btn-primary"
                                onClick={function () {
                                    const ANSWER = document.getElementById("antwort-3");
                                    ANSWER.style.display = (ANSWER.style.display === 'none') ? "block" : "none";

                                    const BUTTON_IMAGE = document.getElementById('button3_image');

                                    if (button3Visible) {
                                        BUTTON_IMAGE.setAttribute('src', visibilityImage);
                                        BUTTON_IMAGE.setAttribute('alt', 'Nicht sichtbar');
                                    } else {
                                        BUTTON_IMAGE.setAttribute('src', visibilityImageOff);
                                        BUTTON_IMAGE.setAttribute('alt', 'Sichtbar');
                                    }
                                    button3Visible = !button3Visible;
                                }}>
                                <img id="button3_image" src={visibilityImage} alt="Auge Symbol"/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
                <h4>Quellen</h4>
                <br/>
                <table
                    className="table">
                    <thead>
                    <tr>
                        <th scope="col">Was</th>
                        <th scope="col">Quelle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Erstes
                            Bild
                        </td>
                        <td>
                            <a href="https://www.ingenieur.de/technik/fachbereiche/energie/alternative-energiequellen/"
                               target="_blank">Zur
                                Quelle</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Bewegungsenergie
                            Bild
                        </td>
                        <td>
                            <a href="https://www.studienkreis.de/physik/bewegungsenergie-berechnen/"
                               target="_blank">Zur
                                Quelle</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Kernenergie
                            Bild
                        </td>
                        <td>
                            <a href="https://www.chauvin-arnoux-energy.com/"
                               target="_blank">Zur
                                Quelle</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Strahlungsenergie
                            Bild
                        </td>
                        <td>
                            <a href="https://www.e-dis.de/"
                               target="_blank">Zur
                                Quelle</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Energie;