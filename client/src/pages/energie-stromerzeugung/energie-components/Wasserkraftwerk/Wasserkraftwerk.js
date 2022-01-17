import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import './Wasserkraftwerk.css';
import '../../../../styles/energie-stromerzeugung/style.css';

import daumenHoch from '../../../../img/energie-stromerzeugung/daumenHoch.jpg';
import daumenRunter from '../../../../img/energie-stromerzeugung/daumenRunter.jpg';
import niederdruckwerk from '../../../../img/energie-stromerzeugung/wasserkraftwerk/niederdruckwerk.jpg';
import mitteldruckwerk from '../../../../img/energie-stromerzeugung/wasserkraftwerk/mitteldruckwerk.jpg';
import hochdruckwerk from '../../../../img/energie-stromerzeugung/wasserkraftwerk/hochdruckwerk.jpg';
import funktionsweise1 from '../../../../img/energie-stromerzeugung/wasserkraftwerk/funktionsweise1.jpg';
import funktionsweise2 from '../../../../img/energie-stromerzeugung/wasserkraftwerk/funktionsweise2.jpg';
import useDocumentTitle from "../../../../utils/UseDocumentTitle";

export const Wasserkraftwerk = () => {
    useDocumentTitle('Energie-Stromerzeugung | Wasserkraftwerk');

    return (
        <div>
            <Container fluid>
                <h2 className="H2">Wasserkraftwerke</h2>
                <Row className="div">
                    <p className="introduction">
                        Wasserkraftwerke werden in 2 Kategorien eingeteilt es gibt 
                         <strong> Laufwasserkraftwerke</strong> und <strong>Speicherwasserkraftwerke</strong> Speicherwasserkraftwerke. Die Fallhöhe
                        des Wassers spielt auch eine Rolle. Bei einer Höhe zwischen <strong>1 –
                        25 Metern</strong> spricht man von einem <strong>Niederdruckkraftwerk</strong>. Bei einer 
                        Höhe von <strong>26 – 100 Metern</strong> spricht man von einem <strong>Mitteldruckkraftwerk </strong> 
                        und ab einer Fallhöhe <strong>von 100 Metern</strong> aufwärts wird es <strong>Hochdruckkraftwerk</strong> genannt.
                    </p>
                </Row>
                <h4 className='H4'>Niederdruckkraftwerke</h4>
                <Row className="BlueRow">
                    <Col>
                        <div className="TextLeft">
                            Niederdruckkraftwerke sind durch geringere Fallhöhen
                            bis etwa 15 m und einen relativ <strong>grossen Durchfluss</strong>. 
                            Sie werden meist als <strong>Laufwasserkraftwerke</strong> konzipiert,
                            eine nennenswerte Speichermöglichkeit durch Überstauung
                            weiter Ufergebiete lässt die <strong>Topographie</strong> in der Regel nicht zu.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={niederdruckwerk} alt={"niederdruckwert"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Mitteldruckkraftwerk</h4>
                <Row className="WhiteRow">
                    <Col>
                        <img className="ImgLeft" src={mitteldruckwerk} alt={"mitteldruckwert"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Mitteldruckkraftwerk sind Wasserkraftanlage mit einer Fallhöhe
                            von 15-50 m, meist im Zusammenhang mit einer <strong>Talsperre</strong> als 
                            Speicherkraftwerk oder auch an höheren Wehren als
                            <strong> Laufwasserkraftwerk</strong>. Mitteldruckkraftwerke sind
                            häufig Teil einer <strong>Mehrzweckanlage</strong>, die neben
                            der Stromerzeugung noch anderen Zwecken dient
                            wie z.B. <strong>Niedrigwasseraufhöhung</strong>, <strong>Hochwasserschutz</strong>, 
                            <strong>Trinkwasserversorgung</strong> oder Freizeit und Erholung.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Hochdruckkraftwerk</h4>
                <Row className="BlueRow">
                    <Col>
                        <div className="TextLeft">
                            Hochdruckkraftwerk sind Wasserkraftanlage mit grosser
                            Fallhöhe über 50 - 2000 Metern, jedoch häufig
                            vergleichsweise <strong>geringem Durchfluss</strong>. Anders als
                            beim Mitteldruckkraftwerk liegt das Hochdruckkraftwerk
                            selten direkt an der Talsperre, sondern ist mit dieser
                            über <strong>Freispiegelleitungen</strong> oder <strong>Druckstollen</strong> verbunden.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={hochdruckwerk} alt={"hochdruckwerk"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Funktionsweise</h4>
                <Row className="ExtraRow">
                    <Col>
                        <img className="ImgLeft" src={funktionsweise1} alt={"funktionsweise1"}/>
                        <div className="ExtraTextLeft">
                            Weil desto schneller das Wasser schlussendlich auf die <strong>Turbine</strong> trifft,
                            desto schneller dreht sich diese und erzeugt so viel mehr
                            Strom, als wenn Wasser mit einer weniger hohen <strong>Geschwindigkeit </strong>
                            auf die Turbine trifft. Nach dem das Wasser durch die Turbine
                            gelaufen ist, wird es durch einen weiteren <strong>Gang</strong> gelassen, der
                            meistens in einem <strong>Fluss</strong> endet.
                        </div>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Das Wasser wird wie gezeigt von einer <strong>Staumauer</strong> aufgehalten.
                            Die Staumauer muss enorm viel <strong>Kraft</strong> aushalten können, denn
                            Millionen von <strong>Kiloliter</strong> drücken die ganze Zeit gegen die
                            <strong> Mauer</strong> und erzeugen einen unendlich grossen <strong>Druck</strong>.
                            Mit diesem Druck kann jedoch Strom erzeugt werden.
                        </div>
                        <img className="ExtraImgRight" src={funktionsweise2} alt={"funktionsweise2"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Nachteile</h4>
                <Row className="BlueRow">
                    <Col>
                        <img className="ImgLeft" src={daumenRunter} alt={"daemonRunter"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            <li>
                                Es kann zu grossen geologischen <strong>Schäden</strong> führen und dadurch viele 
                                <strong>Lebensräume</strong> zerströren.
                            </li>
                            <li>
                                Ein <strong>Bau</strong> eines <strong>Staudams</strong> kann sehr teuer und aufwendig sein.
                            </li>
                            <li>
                                Es gibt immer die <strong>Gefahr</strong> einer <strong>Überschwemmung</strong>, vor allem bei <strong>Hochdruckkraftwerken </strong> 
                                kann dies schwere <strong>Folgen</strong> nach sich ziehen.
                            </li>
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Vorteile</h4>
                <Row className="WhiteRow">
                    <Col>
                        <div className="TextLeft">
                            <li>
                                Die Wasserkraft ist eine <strong>erneuerbare Energie</strong>.
                            </li>
                            <li>
                                Es besteht die Möglichkeit Wasserkraft mit anderen erneuerbaren <strong>Energien</strong> zu <strong>kombinieren</strong>.
                                
                            </li>
                            <li>
                                Wasserkraft erzeugt <strong>keinen Co2</strong> Ausstoss und ist dadurch <strong>klimafreundlich</strong>.
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