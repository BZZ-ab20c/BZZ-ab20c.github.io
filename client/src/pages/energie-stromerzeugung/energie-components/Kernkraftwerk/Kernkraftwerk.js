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
                        Ein <strong>Kernkraftwerk</strong> (KKW), auch <strong>Atomkraftwerk</strong> (AKW), ist 
                        ein Wärmekraftwerk zur Gewinnung <strong>elektrischer Energie </strong> 
                        aus Kernenergie durch kontrollierte Kernspaltung
                        auch <strong>Fission</strong> genannt. Die Grundlageen von Kernkraftwerken
                        ist die <strong>Energiefreisetzung</strong> bei der Spaltung von schweren 
                        <strong> Atomkernen</strong>.
                    </p>
                </Row>
                <h4 className='H4'>Reaktortypen</h4>
                <Row className="GrayRow">
                    <Col>
                        <div className="TextLeft">
                            Weltweit gibt es verschiedene Reaktorsysteme. Die meisten davon
                            sind <strong>Leichtwasserreaktoren</strong>. Auch die vier Kernkraftwerke in der
                            Schweiz <strong>Beznau</strong>, <strong>Mühleberg</strong>, <strong>Gösgen</strong> und 
                            <strong>Leibstadt</strong>, sind
                            mit Leichtwasserreaktoren ausgerüstet. Grössere Kernkraftwerke
                            bestehen aus mehreren <strong>Blöcken</strong>, die unabhängig voneinander
                            elektrischen Strom erzeugen. Jeder Block enthält einen <strong>Kernreaktor</strong>.
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
                            Einerseits dient es als <strong>Kühlmittel</strong> und transportiert die
                            Energie aus dem Reaktor zu den <strong>Dampfturbinen</strong>. Andererseits
                            bremst es die bei der Kernspaltung freiwerdenden <strong>Neutronen </strong> 
                            ab und wirkt so als sogenannter <strong>Moderator</strong>. Nur wenn sie
                            gebremst werden, können die Neutronen weitere <strong>Kettenreaktion</strong> auslösen.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Druckwasserreaktor</h4>
                <Row className="GrayRow">
                    <Col>
                        <div className="TextLeft">
                            Bei den <strong>Druckwasserreaktoren</strong>
                            wird im Reaktor das Wasser unter hohem <strong>Druck</strong> erhitzt, ohne dass
                            es zu sieden beginnt. Das erhitzte Wasser wird zu Dampferzeugern
                            ausserhalb des <strong>Reaktors</strong> geleitet, wo es seine Wärme an einen
                            weiteren Wasserkreislauf abgibt. Das Wasser im zweiten Kreislauf
                            <strong> erhitzt</strong> sich und <strong>verdampft</strong>. Dieser Dampf treibt die Turbinen im
                            konventionellen Teil des <strong>Kernkraftwerks</strong> an.
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
                            Bei den <strong>Siedewasserreaktoren</strong> (Leibstadt und Mühleberg) wird
                            der Dampf im <strong>Reaktordruckbehälter</strong> erzeugt und direkt zu den
                            Turbinen geleitet. Anders als bei den Druckwasserreaktoren
                            enthält der zu den Turbinen gelangende Dampf Spuren kurzlebiger
                            radioaktiver <strong>Stoffe</strong>.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Nass-Kühlturm</h4>
                <Row className="GrayRow">
                    <Col>
                        <div className="TextLeft">
                            Einen solchen Kühlturm mit oft von weitem sichtbarer <strong>Nebelfahne </strong>
                            nennt man Naturzug-Nasskühlturm. Die warme Luft steigt im Turm nach
                            oben. Durch die Verengung in der Mitte und seine grosse Höhe von
                            <strong>140</strong> und mehr Metern entsteht ein starker <strong>Luftzug</strong> von unten nach oben,
                            wie in einem Hauskamin: Die warme Luft entweicht nach oben, während von
                            unten kältere <strong>Umgebungsluft</strong> nachströmt. Diese kalte Luft kühlt die
                            fallenden Wasser Tröpfchen, ganz <strong>ohne Zufuhr</strong> ohne Zufuhr von <strong>Energie</strong>.
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
                        Daneben gibt es auch <strong>Hybrid-Kühltürme</strong>. Sie sind wesentlich
                        niedriger als ein Naturzug-Nasskühlturm und erzeugen praktisch
                        keine <strong>Nebelfahnen</strong>, sodass sie das Landschaftsbild kaum
                        beeinträchtigen. Hingegen benötigt ein Hybridkühlturm <strong>Ventilatoren</strong>,
                        die für genügend <strong>Luftzug</strong> sorgen. Das deutsche Kernkraftwerk
                        <strong> Neckarwestheim</strong> einen solchen Hybridkühlturm. Er benötigt
                        rund <strong>1,4</strong> Prozent der <strong>Stromproduktion</strong> des Kraftwerks.
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
                                Der grösste Nachteil der Atomenergie ist die <strong>radioaktive Strahlung</strong>
                            </li>
                            <li>
                                Ausserdem ist die <strong>Entsorgung</strong> von radioaktiven
                                Abfällen sehr <strong>kompliziert</strong> und <strong>gefährlich</strong>.
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
                                an fossilen Brennstoffen wie <strong>Kohle</strong> und <strong>Erdöl</strong>.
                            </li>
                            <li>
                                Es benötigt nur wenig <strong>Brennstoff</strong>, um
                                grosse Mengen <strong>Energie</strong> zu erzeugen.
                            </li>
                            <li>
                                Kernenergie stellt als <strong>Alternative</strong> zu fossilen Brennstoffen
                                eine bessere <strong>Luftqualität</strong> und sie trägt nicht zur globalen 
                                <strong> Klimaerwärmung</strong> bei.
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