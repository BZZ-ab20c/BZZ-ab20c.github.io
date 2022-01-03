import Navigation from "../components/Navigation";
import titleImage from "../img/energie/titleImage.jpg";
import bewegungsEnergie from "../img/energie/bewegungsEnergieImage.png";
import verbrennungsProzessImage from "../img/energie/verbrennungsprozesseImage.jpg";
import visibilityImage from "../img/energie/visibility.svg";
import visibilityImageOff from "../img/energie/visibility_off.svg";

const Energie = () => {
    return (
        <div>
            <Navigation/>
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <div className="title-section">
                    <img draggable="false" src={titleImage} alt={"Bild zur darstellung der Energie"}
                         className="fade-left"/>
                    <h1 className="top-right">Energie</h1>
                    <dl className="top-left">
                        <dt>Worum es geht:</dt>
                        <dd>Energiearten</dd>
                        <dd>Energieträger</dd>
                        <dd>Energieumwandlungen</dd>
                        <dd>Definition</dd>
                    </dl>
                </div>
                <br/>
                <h4>Bedeutung</h4>
                <br/>
                <p>Der Begriff Energie kommt aus dem Griechischen und bedeutet so viel wie „wirkende Kraft“.
                    Anschaulich ausgedrückt
                    ist Energie die Fähigkeit, Arbeit zu verrichten, Wärme abzugeben oder Licht
                    auszustrahlen.</p>
                <br/>
                <br/>
                <h5>Unterschied Arten & Träger</h5>
                <br/>
                <dl>
                    <dt>Energie kommt in verschiedenen Formen vor:</dt>
                    <dd>Bewegungsenergie (kinetische Energie)</dd>
                    <dd>Lageenergie (potentielle Energie)</dd>
                    <dd>Wärmeenergie = Thermische Energie</dd>
                    <dd>Elektrische Energie</dd>
                    <dd>Atomenergie, Kernenergie</dd>
                    <dd>Strahlungsenergie (elektromagnetische Wellen, Sonnenenergie)</dd>
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
                        <h5>Bewegungsenergie (kinetische Energie)</h5>
                        <p>Diese Energieform liegt immer vor, wenn sich etwas
                            bewegt, z.B. ein Fahrzeug, die Luft (Windenergie),
                            Wasser (Energie in Wellen und Flüssen). In Wind- und
                            Wassermühlen wird die kinetische Energie der Luft
                            bzw. des strömenden Wassers genutzt. Bewegungsenergie
                            ist häufig das Ziel von Energieumwandlungen. So
                            wird z. B. beim Auto die chemische Energie des
                            Treibstoffs zunächst in Wärme und dann (teilweise) in
                            Bewegungsenergie des Fahrzeugs umgewandelt.</p>
                        <br/>
                        <br/>
                        <img draggable="false" src={bewegungsEnergie} alt={"Darstellung Bewegungsenergie"}
                             style={{width: "650px"}}/>
                    </div>
                    <div className="col-6">
                        <h5>Mechanische Lageenergie (potentielle Energie)</h5>
                        <p>Ein ruhender Gegenstand, der sich auf einem Ortsniveau
                            befindet, das im Vergleich zu einem anderen
                            Ortsniveau höher liegt, hat eine bestimmte Lageenergie.
                            Diese kann wieder in Bewegungsenergie
                            umgewandelt werden, in dem man den Gegenstand auf ein
                            niedrigeres Niveau fallen lässt. In
                            Speicherstauseen speichert man z.B. Energie in Form von
                            Lageenergie. Bei Bedarf kann man das Wasser
                            wieder auf ein tieferes Niveau fallen lassen und so die
                            Lageenergie wieder in mechanische
                            Bewegungsenergie und schließlich wieder in elektrische
                            Energie umwandeln. Auch ein mit Gas unter hohem
                            Druck gefüllter Hohlkörper enthält potenzielle Energie,
                            die man nach Öffnen des Ausströmventils wieder
                            gewinnen kann. Man nutzt diese Form der
                            Energiespeicherung in großen mit Druckluft gefüllten
                            Salzkavernen.</p>
                    </div>
                </div>
                <br/>
                <br/>
                <h4>Wärmeenergie</h4>
                <br/>
                <p>Die Wärme, die bei der Verbrennung eines
                    Energieträgers entsteht, geht zum Teil an die
                    Verbrennungsprodukte über
                    etwa an die Rauchgase. Heiße Rauchgase besitzen eine
                    hohe Wärmeenergie. Sie können z.B. in einem
                    Automotor oder
                    einer Turbine zur Erzeugung mechanischer Energie
                    genutzt werden. Der Wert der Wärmeenergie hängt vor
                    allem vom
                    Temperaturniveau ab. Je höher die Temperatur ist
                    (eigentlich: die Temperaturdifferenz zwischen dem
                    Wärmespeicher
                    und der Umgebung), desto größer ist der Anteil der
                    Wärme, der in kinetische oder elektrische Energie
                    umgewandelt
                    werden kann. Mit Temperaturen von einigen hundert
                    Grad lassen sich vielfältige technische Prozesse
                    bewirken,
                    z.B. das Brennen von Zement oder die
                    Stahlherstellung. Geringe Temperaturen sind nur noch
                    zum Heizen von
                    Wohnungen geeignet. Wärmeenergie fällt bei fast
                    allen Energieumwandlungen als "Abfallenergie" an,
                    d.h., sie wird
                    oft als nicht weiter nutzbare Energieform zu den
                    Energieverlusten gezählt.</p>
                <br/>
                <br/>
                <h4>Elektrische Energie</h4>
                <br/>
                <p>Elektrische Energie ist sehr
                    praktisch, da sie sich leicht in
                    kleinen Geräten (Elektromotor,
                    Heizgerät, Leuchte)
                    in fast allen anderen Energieformen
                    umwandeln lässt. Sie lässt sich
                    außerdem über Kabel einfach über
                    große
                    Entfernungen transportieren. Sie hat
                    aber den Nachteil, dass sie nur mit
                    großem Aufwand in größeren Mengen
                    gespeichert werden kann und immer
                    zum Zeitpunkt des Verbrauchs erst
                    aus anderen Energieformen
                    hergestellt werden
                    muss. Dabei treten oft große
                    Umwandlungsverluste auf.</p>
                <br/>
                <br/>
                <h4>Atomenergie,
                    Kernenergie</h4>
                <br/>
                <p>Bei der Nutzung der
                    Atomenergie kommt es
                    im Gegensatz zu
                    allen anderen
                    Energieformen zu
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
                    Weiterhin ist das
                    Problem der
                    Jahrtausende langen
                    Endlagerung des
                    radioaktiven Abfalls
                    bis heute nirgendwo
                    auf der Welt gelöst.
                    Bei der
                    Umwandlung in
                    elektrische Energie
                    treten etwa 70%
                    Wärmeverluste auf,
                    die zur Aufheizung
                    der Flüsse führen.
                    Die
                    Strahlung der Sonne
                    entsteht durch
                    Kernreaktionen auf
                    der Sonne.</p>
                <br/>
                <br/>
                <h4>Strahlungsenergie
                    (Licht,
                    Sonnenenergie)</h4>
                <br/>
                <p>Die
                    Energie
                    des
                    Lichts
                    erkennt
                    man
                    bei
                    einem
                    Sonnenbrand.
                    Die
                    Lichtenergie
                    der
                    Sonne
                    ist
                    die
                    Energieform,
                    die
                    in
                    großen
                    Mengen
                    von
                    außen
                    auf
                    die
                    Erde
                    einströmt.
                    Die
                    Menge
                    der
                    Energie
                    pro
                    Quadratmeter
                    (Energiedichte)
                    ist
                    aber
                    relativ
                    gering.
                    Aus
                    der
                    Sonnenenergie
                    entstehen
                    durch
                    Umwandlung
                    alle
                    anderen
                    regenerativen
                    (erneuerbaren)
                    Energieformen
                    mit
                    Ausnahme
                    der
                    geothermischen
                    Energie.
                    Das
                    Auftreten
                    der
                    Sonnenenergie
                    auf
                    der
                    Erde
                    ist
                    allerdings
                    insbesondere
                    in
                    Deutschland
                    stark
                    vom
                    Wetter,
                    vom
                    Tag/
                    Nacht-Rhythmus
                    und
                    von
                    der
                    Jahreszeit
                    abhängig.
                    Die
                    Astrophysiker
                    schätzen,
                    dass
                    die
                    Sonne
                    noch
                    etwa
                    5
                    Milliarden
                    Jahre
                    strahlen
                    wird.</p>
                <br/>
                <br/>
                <h4>Chemische
                    Energie</h4>
                <br/>
                <p>Diese
                    Energieform
                    ist
                    in
                    allen
                    Brennstoffen
                    und
                    Nahrungsmitteln
                    enthalten.
                    Durch
                    die
                    Verbrennung
                    von
                    Kohle,
                    Holz,
                    Öl,
                    Gas
                    oder
                    Verwertung
                    in
                    Lebewesen
                    kann
                    die
                    chemisch
                    gebundene
                    Energie
                    in
                    andere
                    Energieformen
                    umgewandelt
                    werden.
                    Dabei
                    wird
                    in
                    der
                    Regel
                    auch
                    Wärme
                    freigesetzt,
                    die
                    entweder
                    unmittelbar
                    zum
                    Heizen
                    verwendet
                    wird
                    oder
                    weiter
                    in
                    mechanische
                    Energie
                    (Automotor)
                    oder
                    elektrische
                    Energie
                    umgewandelt
                    (Kohlekraftwerk)
                    wird.
                    In
                    Form
                    der
                    chemischen
                    Energie
                    lässt
                    sich
                    Energie
                    besonders
                    gut
                    speichern
                    (geringes
                    Volumen,
                    geringes
                    Gewicht→
                    hohe
                    Energiedichte).</p>
                <br/>
                <br/>
                <h4>Einteilung
                    nach
                    Umwandlungsschritten</h4>
                <br/>
                <p>Energieformen,
                    die
                    in
                    der
                    Natur
                    direkt
                    vorkommen,
                    bezeichnet
                    man
                    als
                    Primärenergie.
                    Durch
                    die
                    Energieumwandlung,
                    evtl.
                    über
                    mehrere
                    Schritte
                    (Sekundärenergie),
                    entsteht
                    die
                    vom
                    Menschen
                    gewünschte
                    Energieform,
                    die
                    Endenergie.
                    Eigentlich
                    ist
                    aber
                    nicht
                    die
                    Energie
                    selbst
                    das
                    Ziel
                    aller
                    Aktivitäten,
                    sondern
                    der
                    vom
                    Menschen
                    gewünschte
                    Energienutzen,
                    z.B.
                    ein
                    warmes
                    Zimmer.
                    Dieses
                    kann
                    man
                    oft
                    auch
                    ohne
                    Energienutzung,
                    hier
                    z.B.
                    durch
                    eine
                    bessere
                    Wärmedämmung
                    erreichen.</p>
                <br/>
                <br/>
                <h4>Energiebilanz
                    der
                    Erde</h4>
                <br/>
                <p>Die
                    Sonnenenergie
                    ist
                    neben
                    der
                    Energie
                    aus
                    radioaktiven
                    Zerfällen
                    im
                    Erdinnern
                    die
                    einzige
                    Energieform,
                    die
                    der
                    Erdoberfläche
                    in
                    großem
                    Maße
                    zugeführt
                    wird.
                    Ein
                    Teil
                    der
                    in
                    einigen
                    Millionen
                    Jahren
                    auf
                    die
                    Erde
                    eingeströmten
                    Energie
                    ist
                    in
                    Form
                    der
                    fossilen
                    Energieträger
                    (Kohle,
                    Erdöl,
                    Erdgas)
                    in
                    der
                    Erdkruste
                    gespeichert.
                    Zurzeit
                    verbraucht
                    die
                    Menschheit
                    diese
                    Energie
                    in
                    rasantem
                    Tempo.
                    Sie
                    ist
                    in
                    menschlichen
                    Zeiträumen
                    nicht
                    wieder
                    herstellbar.
                    Fast
                    alle
                    Energieumwandlungen
                    führen
                    zu
                    Wärmeenergie.
                    Diese
                    Wärmeenergie
                    wird
                    von
                    der
                    Erde
                    wieder
                    in
                    den
                    Weltraum
                    abgegeben.
                    Energieeinstrahlung
                    durch
                    die
                    Sonne
                    und
                    Energieabgabe
                    sind
                    im
                    Gleichgewicht,
                    so
                    dass
                    sich
                    die
                    Temperatur
                    auf
                    der
                    Erde
                    nicht
                    ändert.</p>
                <br/>
                <p>Bei
                    der
                    Verbrennung
                    der
                    fossilen
                    Energieträger
                    entsteht
                    Kohlendioxid.
                    Dies
                    ist
                    nicht
                    ein
                    durch
                    Nebenreaktionen
                    entstehender
                    Schadstoff,
                    den
                    man
                    durch
                    geeignete
                    Maßnahmen
                    reduzieren
                    kann,
                    sondern
                    neben
                    Wasser
                    das
                    eigentliche
                    Produkt
                    der
                    Verbrennung
                    und
                    damit
                    nicht
                    zu
                    verhindern.</p>
                <br/>
                <p>
                    <b>fossiler
                        Brennstoff
                        +
                        Sauerstoff
                        der
                        Luft &#8594; Kohlendioxid
                        +
                        Wasser(dampf)</b></p>
                <br/>
                <img src={verbrennungsProzessImage} alt={"verbrennungsprozess"}/>
                <br/>
                <p>Der
                    Anstieg
                    des
                    Kohlendioxids
                    in
                    der
                    Atmosphäre
                    führt
                    wie
                    ein
                    Pullover
                    zu
                    einer
                    zusätzlichen
                    Wärmeisolierung
                    der
                    Erde,
                    wodurch
                    sich
                    die
                    Temperatur
                    auf
                    der
                    Erde
                    erhöht.
                    Hierdurch
                    ergeben
                    sich
                    Klimaveränderungen
                    mit
                    kaum
                    überschaubaren
                    Konsequenzen.</p>
                <br/>
                <br/>
                <h4>Energieträger</h4>
                <br/>
                <p>Energieträger
                    oder
                    Energiequellen
                    sind
                    Körper,
                    die
                    Energie
                    besitzen
                    oder
                    gespeichert
                    haben.
                    Zu
                    solchen
                    Energieträgern
                    oder
                    Energiequellen
                    gehören
                    Kraftstoffe
                    und
                    Heizstoffe
                    ebenso
                    wie
                    die
                    Nahrung,
                    fließendes
                    und
                    angestautes
                    Wasser
                    oder
                    Batterien,
                    Solarzellen
                    und
                    Sonnenkollektoren,
                    aber
                    auch
                    die
                    Sonne
                    selbst.</p>
                <br/>
                <br/>
                <h4>Nicht
                    erneuerbare
                    und
                    erneuerbare
                    Energieträger</h4>
                <br/>
                <p>In
                    Deutschland
                    und
                    vielen
                    anderen
                    Ländern
                    werden
                    gegenwärtig
                    als
                    wichtigste
                    Energieträger
                    Erdöl,
                    Erdgas,
                    Braunkohle
                    und
                    Steinkohle
                    genutzt.
                    Diese
                    Energieträger
                    sind
                    auf
                    der
                    Erde
                    vor
                    Millionen
                    von
                    Jahren
                    unter
                    ganz
                    speziellen
                    Bedingungen
                    entstanden.
                    Sie
                    können
                    unter
                    heutigen
                    Bedingungen
                    bzw.
                    in
                    überschaubarer
                    Zeit
                    auf
                    der
                    Erde
                    nicht
                    neu
                    entstehen.
                    Man
                    nennt
                    deshalb
                    solche
                    Energieträger
                    auch
                    nicht
                    erneuerbare
                    Energieträger.
                    Es
                    ist
                    heute
                    schon
                    absehbar,
                    dass
                    sie
                    der
                    Menschheit
                    nicht
                    beliebig
                    lange
                    in
                    ausreichender
                    Menge
                    zu
                    Verfügung
                    stehen.</p>
                <br/>
                <p>Daneben
                    gibt
                    es
                    eine
                    Reihe
                    von
                    Energieträgern,
                    die
                    nachwachsen
                    (Holz,
                    Biomasse)
                    oder
                    die
                    immer
                    wieder
                    von
                    neuem
                    nutzbar
                    sind
                    (Wind,
                    Wasser,
                    Sonnenstrahlung,
                    Gezeiten,
                    Erdwärme).
                    Man
                    nennt
                    sie
                    deshalb
                    erneuerbare
                    Energieträger
                    oder
                    regenerative
                    Energieträger.
                    Auch
                    die
                    Bezeichnung
                    alternative
                    Energieträger
                    oder
                    alternative
                    Energien
                    ist
                    üblich.</p>
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
                            Potenzielle
                            Energie,
                            was
                            genau?
                        </td>
                        <td className="antworten">
                <span style="display: none" id="antwort-1">
                    <b>Masse und Höhe &#8594; W pot = m * h * g</b>
                    <br/>
                    <b>g = konstante</b>
                </span>
                        </td>
                        <td>
                            <button
                                id="button-1"
                                type="button"
                                className="btn btn-primary"
                                onClick="toggleAnswer('antwort-1', this.id)">
                                <img src={visibilityImage}
                                     alt={"Auge Symbol"}/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>
                            Wärmeenergie
                            z.B.
                            wenn
                            man
                            Holz
                            (Energieträger)
                            verbrennt
                            =
                            Wärmeenergie?
                        </td>
                        <td className="antworten">
                <span style="display: none" id="antwort-2">
                    <b>Stoffe unterschiedlich gut aufnehmen, Wärmekapazität c</b>
                    <br/>
                    <b>Q Wärmeenergie = m * c * DeltaT</b>
                </span>
                        </td>
                        <td>
                            <button
                                id="button-2"
                                type="button"
                                className="btn btn-primary"
                                onClick="toggleAnswer('antwort-2', this.id)">
                                <img src={visibilityImageOff}
                                     alt="Auge Symbol"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>
                            Primärenergie
                            =
                            kommen
                            in
                            der
                            Natur
                            vor
                            wie
                            zum
                            Beispiel?
                        </td>
                        <td className="antworten">
                <span style="display: none" id="antwort-3">
                    <b>Bewegungsenergie= &#189; * m * v2</b>
                </span>
                        </td>
                        <td>
                            <button
                                id="button-3"
                                type="button"
                                className="btn btn-primary"
                                onClick="toggleAnswer('antwort-3', this.id)">
                                <img src={visibilityImage} alt="Auge Symbol"/>
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
                        <td>Verbrennungsprozess
                            Bild
                        </td>
                        <td>
                            <a href="https://www.holzpellet.com/verbrennungsprozesse.html"
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