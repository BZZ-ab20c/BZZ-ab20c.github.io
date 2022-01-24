import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import './Solar.css';
import '../../../../styles/energie-stromerzeugung/style.css';

import daumenHoch from '../../../../img/energie-stromerzeugung/daumenHoch.jpg';
import daumenRunter from '../../../../img/energie-stromerzeugung/daumenRunter.jpg';
import strahlen from '../../../../img/energie-stromerzeugung/solar/strahlen.jpg';
import scheibe from '../../../../img/energie-stromerzeugung/solar/scheibe.jpg';
import silizium from '../../../../img/energie-stromerzeugung/solar/silizium.jpg';
import solarzelle1 from '../../../../img/energie-stromerzeugung/solar/solarzelle1.jpg';
import solarzelle2 from '../../../../img/energie-stromerzeugung/solar/solarzelle2.jpg';
import useDocumentTitle from "../../../../utils/UseDocumentTitle";

export const Solar = () => {
    useDocumentTitle('Energie-Stromerzeugung | Solar');

    return (
        <div>
            <Container fluid>

                <h2 className="H2">Solar</h2>
                <Row className="div">
                    <p className="introduction">
                        Die Sonne ist der <strong>grösste</strong> natürliche <strong>Energielieferant</strong> unseres
                        Planeten und es bietet sich an, die Energie der <strong>Sonnenstrahlen </strong> 
                        zu nutzen. Die Technologien zur Umwandlung von Solarenergie in
                        Strom und Wärme können in zwei Hauptgruppen unterteilt werden:
                        <strong> Solarzellen</strong> und Solarthermieanlagen.
                    </p>
                    <p className="introduction">
                        Unter Photovoltaik versteht man die <strong>direkte Umwandlung</strong> von
                        <strong> Lichtenergie</strong>, meist aus Sonnenlicht, mittels <strong>Solarzellen</strong> in
                        elektrische Energie.
                    </p>
                </Row>
                <h4 className='H4'>Wie geht’s</h4>
                <Row className="YellowRow">
                    <Col>
                        <div className="TextLeft">
                            Die Energie der Sonnenstrahlen, sogenannte Solarenergie,
                            entsteht im <strong>Inneren</strong> der <strong>Sonne</strong> durch Kernfusion und gelangt
                            als <strong>elektromagnetische Strahlung</strong> zur <strong>Erde</strong>. Hier kann die
                            <strong> Strahlung</strong> für die Erzeugung von <strong>Strom</strong> und Wärme
                            für <strong>Heisswasser</strong> genutzt werden. Da die meiste Energie tagsüber
                            gebraucht wird, passen <strong>solare Erzeugung</strong> und Energiebedarf gut zusammen.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={strahlen} alt={"strahlen"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Photovoltaik</h4>
                <Row className="WhiteRow">
                    <img className="ExtraImg" src={silizium} alt={"silizium"}/>
                    <div className="introduction">
                        <p>Photovoltaik-Module wandeln das Licht der Sonne direkt in elektrische
                        Energie um. Das Sonnenlicht verursacht dabei in der Solarzelle eine
                        <strong> elektrische Spannung</strong>, die an der Oberfläche abgenommen wird.</p>
                        <p><strong> 95 %</strong> aller <strong>Solarzellen</strong> werden aus <strong>Silizium</strong> hergestellt.
                        Silizium ist nichts anderes als <strong>Quarzsand</strong>, eines der häufigsten
                        Elemente der <strong>Erde</strong>.</p>
                    </div>
                </Row>
                <Row className="YellowRow">
                    <Col>
                        <div className="TextLeft">
                            Fällt Licht auf eine <strong>Siliziumscheibe</strong>, werden <strong>Elektronen freigesetzt</strong>. 
                            Damit diese genutzt werden können, wird die Zelle auf der <strong>Vorder-</strong> und 
                            der <strong>Rückseite</strong> mit unterschiedlichen <strong>Fremdatomen verunreinigt</strong>, beziehungsweise dotiert. Dadurch wandern die 
                            Elektronen alle auf eine Seite und die positiven <strong>Ladungsträger</strong> auf 
                            die andere. Es entsteht ein <strong>Plus-</strong> und ein <strong>Minuspol</strong> wie in einer Batterie. 
                            Wird ein Verbrauchsgerät angeschlossen, fliesst <strong>Strom</strong>.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={scheibe} alt={"scheibe"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Wie ist eine Solarzelle aufgebaut?</h4>
                <Row className="ExtraRow">
                    <Col>
                        <img className="ImgLeft" src={solarzelle1} alt={"solarzelle1"}/>
                        <div className="ExtraTextLeft">
                            Der Aufbau einer Silizium-Solarzelle besteht aus drei <strong>Schichten</strong>.
                            Den Hauptbestandteil bilden zwei unterschiedlich dotierte Siliziumschichten:
                            Die <strong>n-dotierte</strong> Schicht, in dieser Schicht ist etwas <strong>Phosphor</strong> eingemischt,
                            wodurch diese negativ wird. In der <strong>p-dotierte</strong> Schicht ist
                            etwas <strong>Bor</strong> eingemischt, wodurch diese <strong>positiv</strong> wird.
                        </div>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Zwischen den beiden Schichten befindet sich eine <strong>Grenzschicht</strong>,
                            die freigesetzte Ladungen lediglich mittels Sonnenlichtes passieren
                            können. In diesem <strong>Kern</strong> der Solarzelle entsteht durch Elektronenbewegungen
                            ein elektrisches Feld, das auch <strong>p-n-Übergang</strong> genannt wird.
                        </div>
                        <img className="ExtraImgRight" src={solarzelle2} alt={"solarzelle2"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Nachteile</h4>
                <Row className="YellowRow">
                    <Col>
                        <img className="ImgLeft" src={daumenRunter} alt={"daumenrunter"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            <li>
                                Sonnenenergie ermöglicht aufgrund der <strong>wetter-</strong>, <strong>tages-</strong> und
                                jahreszeitabhängigen Sonneneinstrahlung keine konstante beziehungsweise.
                                bedarfsgerechte <strong>Energieversorgung</strong>.
                            </li>
                            <li>
                                Sonnenenergienutzung hat aufgrund der geringen Energiedichte
                                einen relativ hohen <strong>Flächenbedarf</strong>.
                            </li>
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Vorteile</h4>
                <Row className="WhiteRow">
                    <Col>
                        <div className="TextLeft">
                            <li>
                                Sonnenenergienutzung setzt keine <strong>Luftschadstoffe </strong> 
                                frei, wie z. B. Feinstaub.
                            </li>
                            <li>
                                Sonnenenergienutzung setzt keine <strong>Treibhausgase</strong> frei
                                und ist damit <strong>klimaschonend</strong>.
                            </li>
                            <li>
                                Sonnenenergie ist praktisch <strong>unbegrenzt</strong> verfügbar.
                            </li>
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={daumenHoch} alt={"daumenHoch"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}