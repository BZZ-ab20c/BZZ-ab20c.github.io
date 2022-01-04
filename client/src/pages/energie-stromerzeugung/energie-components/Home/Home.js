import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';
import './Home.css';
import '../../../../styles/energie-stromerzeugung/style.css';

import strom from '../../../../img/energie-stromerzeugung/home/strom.jpg';
import dynamo from '../../../../img/energie-stromerzeugung/home/dynamo.jpg';
import erzeugen from '../../../../img/energie-stromerzeugung/home/erzeugen.jpg';

const TitleSeite = () => {
    return (
        <div>
            <Container fluid>

                <h2 className="H2">Wie wird aus Energie Strom erzeugt ?</h2>
                <Row className="div">
                    <p className="introduction">In der heutigen Zeit wäre die ganze Welt ohne Strom Komplet
                        aufgeschmissen, wir wären nicht mehr lebensfähig. Der Strom wird
                        überall gebraucht, im Haushalt, im Beruf und im öffentlichen Leben.
                        Doch wie wird Strom erzeugt? Das ist die Frage, die wir uns heute stellen.
                    </p>
                </Row>
                <Row className="GreenRow">
                    <Col>
                        <div className="TextLeft">
                            Elektrische Energie, umgangssprachlich Strom genannt, wird durch
                            Umwandlung aus anderen Energieformen erzeugt. Wobei „erzeugt“
                            physikalisch genommen nicht richtig ist, denn Energie kann nicht
                            einfach entstehen, sondern nur aus einer Energieform in eine andere
                            umgewandelt werden.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={strom} alt={"strom"}/>
                    </Col>
                </Row>
                <h4 className='H4'>Fahraddynamo</h4>
                <Row className="WhiteRow">
                    <Col>
                        <img className="ImgLeft" src={dynamo} alt={"dynamo"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            Ein einfaches Beispiel ist der Fahrraddynamo.
                            Durch die Bewegung des Rades dreht sich eine im Dynamo
                            enthaltener Permanentmagnet in einer feststehenden
                            Induktionsspule. Dadurch wird ein Stromfluss erzeugt, der
                            die Fahrradlampe zum Leuchten bringt. Ein ähnliches Prinzip
                            verwendet auch ein Kraftwerksgenerator.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'> Kraftwerkarten</h4>
                <Row className="GreenRow">
                    <Col>
                        <div className="TextLeft">
                            Kraftwerke werden nach der Art, wie in ihnen Strom gewonnen
                            wird, unterschieden. Es gibt Wasserkraftwerken, Windkraftwerken,
                            Solaranlagen, Biomassekraftwerken, Gasturbinenkraftwerken,
                            Kernenergieanlagen, Kohlekraftwerken und viele andere Arten.
                            Das Prinzip bleibt, aber bei allen Kraftwerken das Gleiche.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={erzeugen} alt={"erzeugen"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TitleSeite;