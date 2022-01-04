import React from 'react';

import kuehlschrankZu from "../img/kuehlschrank/KühlschrankZu.jpg";
import kuehlschrankOffen from "../img/kuehlschrank/KühlschrankOffen.jpg";
import imagineSelberZeichne from "../img/kuehlschrank/ImagineSelberZeichne.jpg";
import Navigation from "../components/Navigation";

function closeFridge() {
    document.getElementById('myImage').setAttribute('src', kuehlschrankZu);
    document.getElementById('myImage').setAttribute('alt', 'Kühlschrank zu');
}

function openFridge() {
    document.getElementById('myImage').setAttribute('src', kuehlschrankOffen);
    document.getElementById('myImage').setAttribute('alt', 'Kühlschrank offen');
}

const Kuehlschrank = () => {
    return (
        <div>
            <Navigation/>

            <div className="container d-flex flex-column align-items-center justify-content-center">
                <div className="title-section">
                    <h1>Kühlschrank</h1>
                </div>

                <div>
                    <img id="myImage" src={kuehlschrankZu} style={{width: "100px"}} alt="kühlschrank zu"/>
                </div>

                <div>
                    <button onClick={openFridge}>Kühlschrank
                        öffnen
                    </button>
                    <button onClick={closeFridge}>Kühlschrank
                        schliessen
                    </button>
                </div>

                <br/>
                <br/>


                <div className="row">
                    <div className="col-6">
                        <h6>Warum gibt ein Kühlschrank mehr Wärme als Kälte ab?</h6>
                        <p>Der Kühlschrank transportiert also nicht nur Wärme nach außen,<br/>
                            sondern muss an der Außenseite gewissermaßen für zusätzliche <br/>
                            Hitze sorgen, damit die Wärmeabgabe funktioniert und damit der<br/>
                            Kreislauf des Kühlens. Das ist der Grund, warum ein Eisschrank<br/>
                            nach außen mehr Wärme abgibt, als er dem Innenraum entzieht.
                        </p>
                        <br/>
                        <br/>
                        <h6>Wo ist der Siedepunkt?</h6>
                        <p>Bei einer Mischung von Wasser und Frostschutzmittel im Verhältnis <br/>
                            1:1 liegt der Siedepunkt des Kühlmittels bei etwa 107° C und bietet <br/>
                            dem Kühlsystem somit eine enorme Leistungsreserve.
                        </p>

                        <br/>
                        <br/>
                    </div>
                    <div className="col-6">
                        <h6>Wie viel wärme gibt ein Kühlschrank ab?</h6>
                        <p>Die meisten Kühlschränke werden von einem Kondensatormotor mit <br/>
                            ca. 90 W angetrieben. Also wird der Motor alleine deutlich <br/>
                            weniger als 90 W in Wärme umsetzen. Und solange durch die Türe <br/>
                            keine fremde Wärmenergie in den Kühlschrank reinkommt, wird <br/>
                            der auch nicht viel mehr Wärme erzeugen.
                        </p>
                        <br/>
                        <h6>Wie viel arten von Kühlschranke gibt es?</h6>
                        <p>Es gibt den Kompressor Kühlschrank, <br/>
                            Absorber Kühlschrank und <br/>
                            Thermoelektrischer Kühlschrank
                        </p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-6">
                        <h6>Warum gibt ein Kühlschrank mehr Wärme als Kälte ab?</h6>
                        <p>

                        </p>
                        <br/>
                        <br/>
                        <h6>Wo ist der Siedepunkt?</h6>
                        <p>

                        </p>

                        <br/>
                        <br/>
                    </div>

                    <div className="col-6">
                        <img src={imagineSelberZeichne} style={{position: "center", height: "350px"}}
                             alt="Kühlschrank_Image1"/>
                    </div>


                    <div className="col-6">
                        <h6>Wie viel wärme gibt ein Kühlschrank ab?</h6>
                        <p>

                        </p>
                        <br/>
                        <h6>Wie viel arten von Kühlschranke gibt es?</h6>
                        <p>

                        </p>
                    </div>
                </div>

                <div>
                    <ol>
                        <li>An der inneren Rückwand des Kühlschrankes befindet sich ein schlangenförmiges Rohr,
                            das von
                            unten nach oben verläuft. Darin befindet sich die Kühlflüssigkeit.
                        </li>
                        <li>Sobald im Kühlschrank Wärme entsteht, wird die Kühlflüssigkeit ebenfalls wärmer,
                            erreicht
                            den Siedepunkt und verdampft. Der Dampf steigt im Rohr nach oben.
                        </li>
                        <li>Wenn der Dampf oben angekommen ist, wird er in den Kompressor geleitet. Darin wird
                            er stark
                            verdichtet. Es entsteht wieder eine Flüssigkeit, die durch den hohen
                            Verdichtungsgrad einen
                            weit höheren Siedepunkt hat.
                        </li>
                        <li>Eine an der Kompressor angeschlossene Pumpe leitet die Flüssigkeit in ein
                            schlangenförmiges
                            Rohrsystem auf der hinteren Außenwand des Kühlschranks. Darin kühlt die Flüssigkeit
                            wieder ab und
                            gibt die Wärme, die sie im Inneren aufgenommen hat, nach außen ab.
                        </li>
                        <li>Unten angekommen, gelangt die Flüssigkeit in ein Drosselventil. Dieses zerstäubt die
                            Flüssigkeit
                            wieder, damit der Siedepunkt wieder sehr niedrig wird.
                        </li>
                        <li>Immer wenn im Inneren des Kühlschranks Wärme entsteht, zum Beispiel wenn die Tür
                            geöffnet wird
                            oder wenn etwas Warmes hineingestellt wird, verdampft ein Teil der Kühlflüssigkeit.
                            Genau diese Menge
                            Flüssigkeit wird vom Drosselventil wieder in das innere Rohr hineingespritzt.
                        </li>
                        <li>Der Kreislauf ist damit abgeschlossen. Erkennen können Sie den Vorgang am Brummen
                            des Kühlschranks,
                            das manchmal einsetzt. Immer wenn es im Kühlschrank zu warm wird, verdampft ein Teil
                            der Flüssigkeit und
                            Kompressor sowie Pumpe werden aktiviert.
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    );
}

export default Kuehlschrank;