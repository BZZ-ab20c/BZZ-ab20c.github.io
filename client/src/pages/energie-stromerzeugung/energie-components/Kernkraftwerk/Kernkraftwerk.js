import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import './Kernkraftwerk.css';
import '../../../../styles/energie-stromerzeugung/style.css';

import daumenHoch from '../../../../img/energie-stromerzeugung/daumenHoch.jpg'
import daumenRunter from '../../../../img/energie-stromerzeugung/daumenRunter.jpg';
import reaktor from '../../../../img/energie-stromerzeugung/kernkraftwerk/reaktor.jpg';
import leichtwasserreaktor from '../../../../img/energie-stromerzeugung/kernkraftwerk/leichtwasserreaktor.jpg';
import druckwasserreaktor from '../../../../img/energie-stromerzeugung/kernkraftwerk/druckwasserreaktor.gif';
import sidewasserreaktor from '../../../../img/energie-stromerzeugung/kernkraftwerk/sidewasserreaktor.gif';
import nasskuehlturm from '../../../../img/energie-stromerzeugung/kernkraftwerk/nasskuehlturm.jpg';
import hybridkuehlturm from '../../../../img/energie-stromerzeugung/kernkraftwerk/hybridkuehlturm.jpg';
import useDocumentTitle from "../../../../utils/UseDocumentTitle";

export const Kernkraftwerk = () => {
    useDocumentTitle('Energie-Stromerzeugung | Kernkraftwerk');

    return (
        <div>
            <Container fluid>
                <h2 className="H2">Kernkraftwerk</h2>
                <Row className="div">
                    <p className="introduction">
                        Ein Kernkraftwerk (KKW), auch Atomkraftwerk (AKW), ist
                        ein Wärmekraftwerk zur Gewinnung elektrischer Energie
                        aus Kernenergie durch kontrollierte Kernspaltung
                        auch Fission genannt. Die Grundlageen von Kernkraftwerken
                        ist die Energiefreisetzung bei der Spaltung von schweren
                        Atomkernen.
                    </p>
                </Row>
                <h4 className='H4'>Reaktortypen</h4>
                <Row className="GrayRow">
                    <Col>
                        <div className="TextLeft">
                            Weltweit gibt es verschiedene Reaktorsysteme. Die meisten davon
                            sind Leichtwasserreaktoren. Auch die fünf Kernkraftwerke in der
                            Schweiz –Beznau-1 und -2,Mühleberg, Gösgen und Leibstadt – sind
                            mit Leichtwasserreaktoren ausgerüstet. Grössere Kernkraftwerke
                            bestehen aus mehreren Blöcken, die unabhängig voneinander
                            elektrischen Strom erzeugen. Jeder Block enthält einen Kernreaktor.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={reaktor} alt={"reaktor"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Leichtwasserreaktor</h4>
                <Row className="WhiteRow">
                    <Col>
                        <img className="ImgLeft" src={leichtwasserreaktor} alt={"leichtwasserreaktor"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            In den Leichtwasserreaktoren hat das Wasser zwei Aufgaben:
                            Einerseits dient es als Kühlmittel und transportiert die
                            Energie aus dem Reaktor zu den Dampfturbinen. Andererseits
                            bremst es die bei der Kernspaltung freiwerdenden Neutronen
                            ab und wirkt so als sogenannter Moderator. Nur wenn sie
                            gebremst werden, können die Neutronen weitere Kettenreaktion auslösen.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Druckwasserreaktor</h4>
                <Row className="GrayRow">
                    <Col>
                        <div className="TextLeft">
                            Bei den Druckwasserreaktoren (Beznau-1, Beznau-2 und Gösgen)
                            wird im Reaktor das Wasser unter hohem Druck erhitzt, ohne dass
                            es zu sieden beginnt. Das erhitzte Wasser wird zu Dampferzeugern
                            ausserhalb des Reaktors geleitet, wo es seine Wärme an einen
                            weiteren Wasserkreislauf abgibt. Das Wasser im zweiten Kreislauf
                            erhitzt sich und verdampft. Dieser Dampf treibt die Turbinen im
                            konventionellen Teil des Kernkraftwerks an.
                        </div>
                    </Col>
                    <Col>
                        <img className="GifRight" src={druckwasserreaktor} alt={"druckwasserreaktor"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Sidewasserreaktor</h4>
                <Row className="WhiteRow">
                    <Col>
                        <img className="GifLeft" src={sidewasserreaktor} alt={"sidewasserreaktor"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Bei den Siedewasserreaktoren (Leibstadt und Mühleberg) wird
                            der Dampf im Reaktordruckbehälter erzeugt und direkt zu den
                            Turbinen geleitet. Anders als bei den Druckwasserreaktoren
                            enthält der zu den Turbinen gelangende Dampf Spuren kurzlebiger
                            radioaktiver Stoffe.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Nass-Kühlturm</h4>
                <Row className="GrayRow">
                    <Col>
                        <div className="TextLeft">
                            Einen solchen Kühlturm mit oft von weitem sichtbarer Nebelfahne
                            nennt man Naturzug-Nasskühlturm. Die warme Luft steigt im Turm nach
                            oben. Durch die Verengung in der Mitte und seine grosse Höhe von
                            140 und mehr Metern entsteht ein starker Luftzug von unten nach oben,
                            wie in einem Hauskamin: Die warme Luft entweicht nach oben, während von
                            unten kältere Umgebungsluft nachströmt. Diese kalte Luft kühlt die
                            fallenden Wasser Tröpfchen, ganz ohne Zufuhr von Energie.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={nasskuehlturm} alt={"nasskuehlturm"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Hybrid-Kühltürme</h4>
                <Row className="WhiteRow">
                    <img className="ExtraImgHybrid" src={hybridkuehlturm} alt={"hybridkuehlturm"}/>
                    <div className="ExtraTextHybrid">
                        Daneben gibt es auch Hybrid-Kühltürme. Sie sind wesentlich
                        niedriger als ein Naturzug-Nasskühlturm und erzeugen praktisch
                        keine Nebelfahnen, sodass sie das Landschaftsbild kaum
                        beeinträchtigen. Hingegen benötigt ein Hybridkühlturm Ventilatoren,
                        die für genügend Luftzug sorgen. Das deutsche Kernkraftwerk
                        Neckarwestheim hat einen solchen Hybridkühlturm. Er benötigt
                        rund 1,4 Prozent der Stromproduktion des Kraftwerks.
                    </div>
                </Row>
                <h4 className='H4'>Nachteile</h4>
                <Row className="GrayRow">
                    <Col>
                        <img className="ImgLeft" src={daumenRunter} alt={"daumenRunter"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            <li>
                                Der grösste Nachteil der Atomenergie ist die radioaktive Strahlung
                            </li>
                            <li>
                                Ausserdem ist die Entsorgung von radioaktiven
                                Abfällen sehr kompliziert und gefährlich
                            </li>
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Vorteile</h4>
                <Row className="WhiteRow">
                    <Col>
                        <div className="TextLeft">
                            <li>
                                Durch die Nutzung von Kernkraft reduziert sich der Verbrauch
                                an fossilen Brennstoffen wie Kohle und Erdöl.
                            </li>
                            <li>
                                Es benötigt nur wenig Brennstoff, um
                                grosse Mengen Energie zu erzeugen.
                            </li>
                            <li>
                                Kernenergie stellt als Alternative zu fossilen Brennstoffen
                                eine bessere Luftqualität und sie trägt nicht zur globalen
                                Klimaerwärmung bei.
                            </li>
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={daumenHoch} alt={"daumenhoch"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}