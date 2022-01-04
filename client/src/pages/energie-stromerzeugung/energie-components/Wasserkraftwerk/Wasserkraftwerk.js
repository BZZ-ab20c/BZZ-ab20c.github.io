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

export const Wasserkraftwerk = () => {
    return (
        <div>
            <Container fluid>

                <h2 className="H2">Wasserkraftwerke</h2>
                <Row className="div">
                    <p className="introduction">
                        Wasserkraftwerke werden in 2 Kategorien eingeteilt es gibt
                        Laufwasserkraftwerke und Speicherwasserkraftwerke. Die Fallhöhe
                        des Wassers spielt auch eine Rolle. Bei einer Höhe zwischen 1 –
                        25 Metern spricht man von einem Niederdruckkraftwerk. Bei einer
                        Höhe von 26 – 100 Metern spricht man von einem Mitteldruckkraftwerk
                        und ab einer Fallhöhe von 100 Metern aufwärts wird es Hochdruckkraftwerk
                        genannt.
                    </p>
                </Row>
                <h4 className='H4'>Niederdruckkraftwerke</h4>
                <Row className="BlueRow">
                    <Col>
                        <div className="TextLeft">
                            Niederdruckkraftwerke sind durch geringere Fallhöhen
                            bis etwa 15 m und einen relativ großen Durchfluß.
                            Sie werden meist als Laufwasserkraftwerke konzipiert,
                            eine nennenswerte Speichermöglichkeit durch Überstauung
                            weiter Ufergebiete läßt die Topographie in der Regel nicht zu.
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
                            von 15-50 m, meist im Zusammenhang mit einer Talsperre als
                            Speicherkraftwerk oder auch an höheren Wehren als
                            Laufwasserkraftwerk. Mitteldruckkraftwerke sind
                            häufig Teil einer Mehrzweckanlage, die neben
                            der Stromerzeugung noch anderen Zwecken dient
                            wie z.B. Niedrigwasseraufhöhung, Hochwasserschutz,
                            Trinkwasserversorgung oder Freizeit und Erholung.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Hochdruckkraftwerk</h4>
                <Row className="BlueRow">
                    <Col>
                        <div className="TextLeft">
                            Hochdruckkraftwerk sind Wasserkraftanlage mit großer
                            Fallhöhe über 50 - 2000 metern, jedoch häufig
                            vergleichsweise geringem Durchfluß. Anders als
                            beim Mitteldruckkraftwerk liegt das Hochdruckkraftwerk
                            selten direkt an der Talsperre, sondern ist mit dieser
                            über Freispiegelleitungen oder Druckstollen verbunden.
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
                            Weil desto schneller das Wasser schlussendlich auf die Turbine trifft,
                            desto schneller dreht sich diese und erzeugt so viel mehr
                            Strom, als wenn Wasser mit einer weniger hohen Geschwindigkeit
                            auf die Turbine trifft. Nach dem das Wasser durch die Turbine
                            gelaufen ist, wird es durch einen weiteren Gang gelassen, der
                            meistens in einem Fluss endet.
                        </div>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Das Wasser wird wie gezeigt von einer Staumauer aufgehalten.
                            Die Staumauer muss enorm viel Kraft aushalten können, denn
                            Millionen von Kiloliter drücken die ganze Zeit gegen die
                            Mauer und erzeugen einen unendlich grossen Druck.
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
                        <div className="Con">
                            <li>
                                Es kann zu grossen Geologischen schäden führen und dadurch grosser
                                Lebensräume zerströren
                            </li>
                            <li>
                                Ein Bau eines Staudamskann sehr teuer und aufwendig sein.
                            </li>
                            <li>
                                Es gibt immer die gefahr einer Überschwemmung, vorallem bei Hochdruckkraftwerk
                                kann dies schwere volgen von sich ziehen
                            </li>
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Vorteile</h4>
                <Row className="WhiteRow">
                    <Col>
                        <div className="TextLeft">
                            <li>
                                Die Wasserkraft ist eine Erneuerbare energie.
                            </li>
                            <li>
                                Es ist auch eine möglichkeit zu kombinieren
                                mit anderen erneuerbaren Energien, wie zum Beispiel Solar.
                            </li>
                            <li>
                                Wasserkraft erzeugt keinen Co2 ausstoss und ist dadurch Klimafreundlich.
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