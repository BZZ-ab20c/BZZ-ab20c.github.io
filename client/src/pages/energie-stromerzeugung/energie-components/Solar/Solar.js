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

export const Solar = () => {
    return (
        <div>
            <Container fluid>

                <h2 className="H2">Solar</h2>
                <Row className="div">
                    <p className="introduction">
                        Die Sonne ist der größte natürliche Energielieferant unseres
                        Planeten und es bietet sich an, die Energie der Sonnenstrahlen
                        zu nutzen. Die Technologien zur Umwandlung von Solarenergie in
                        Strom und Wärme können in zwei Hauptgruppen unterteilt werden:
                        Solarzellen und Solarthermieanlagen.
                    </p>
                    <p className="introduction">
                        Unter Photovoltaik versteht man die direkte Umwandlung von
                        Lichtenergie, meist aus Sonnenlicht, mittels Solarzellen in
                        elektrische Energie.
                    </p>
                </Row>
                <h4 className='H4'>Wie geht’s</h4>
                <Row className="YellowRow">
                    <Col>
                        <div className="TextLeft">
                            Die Energie der Sonnenstrahlen, sogenannte Solarenergie,
                            entsteht im Inneren der Sonne durch Kernfusion und gelangt
                            als elektromagnetische Strahlung zur Erde. Hier kann die
                            Strahlung für die Erzeugung von Strom (Photovoltaik) und Wärme
                            für Heißwasser genutzt werden. Da die meiste Energie tagsüber
                            gebraucht wird, passen solare Erzeugung und Energiebedarf gut zusammen.
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
                        Photovoltaik-Module wandeln das Licht der Sonne direkt in elektrische
                        Energie um. Das Sonnenlicht verursacht dabei in der Solarzelle eine
                        elektrische Spannung, die an der Oberfläche abgenommen wird.
                        95 % aller Solarzellen werden aus Silizium hergestellt.
                        Silizium ist nichts anderes als Quarzsand, eines der häufigsten
                        Elemente der Erde.
                    </div>
                </Row>
                <Row className="YellowRow">
                    <Col>
                        <div className="TextLeft">
                            Fällt Licht auf eine Siliziumscheibe, werden Elektronen freigesetzt.
                            Damit diese genutzt werden können, wird die Zelle auf der Vorder- und
                            der Rückseite mit unterschiedlichen Fremdatomen. Dadurch wandern die
                            Elektronen alle auf eine Seite und die positiven Ladungsträger auf
                            die andere. Es entsteht ein Plus- und ein Minuspol wie in einer Batterie.
                            Wird ein Verbrauchsgerät angeschlossen, fließt Strom.
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
                            Der Aufbau einer Silizium-Solarzelle besteht aus drei Schichten.
                            Den Hauptbestandteil bilden zwei unterschiedlich dotierte Siliziumschichten:
                            Die n-dotierte Schicht, in dieser Schicht ist etwas Phosphor eingemischt,
                            wodurch diese negativ wird. In der p-dotierte Schicht ist
                            etwas Bor eingemischt, wodurch diese positiv wird.
                        </div>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Zwischen den beiden Schichten befindet sich eine Grenzschicht,
                            die freigesetzte Ladungen lediglich mittels Sonnenlichtes passieren
                            können. In diesem Kern der Solarzelle entsteht durch Elektronenbewegungen
                            ein elektrisches Feld, das auch p-n-Übergang genannt wird.

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
                        <div className="Con">
                            <li>
                                Sonnenenergie ermöglicht aufgrund der wetter-, tages- und
                                jahreszeitabhängigen Sonneneinstrahlung keine konstante bzw.
                                bedarfsgerechte Energieversorgung.
                            </li>
                            <li>
                                Sonnenenergienutzung hat aufgrund der geringen Energiedichte
                                einen relativ hohen Flächenbedarf.
                            </li>
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Vorteile</h4>
                <Row className="WhiteRow">
                    <Col>
                        <div className="TextLeft">
                            <li>
                                Sonnenenergienutzung setzt keine Luftschadstoffe
                                frei, wie z. B. Feinstaub.
                            </li>
                            <li>
                                Sonnenenergienutzung setzt keine Treibhausgase frei
                                und ist damit klimaschonend.
                            </li>
                            <li>
                                Sonnenenergie ist praktisch unbegrenzt verfügbar.
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