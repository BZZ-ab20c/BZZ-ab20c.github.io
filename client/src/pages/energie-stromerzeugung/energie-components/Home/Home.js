import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';
import './Home.css';
import '../../../../styles/energie-stromerzeugung/style.css';

import strom from '../../../../img/energie-stromerzeugung/home/strom.jpg';
import dynamo from '../../../../img/energie-stromerzeugung/home/dynamo.jpg';
import erzeugen from '../../../../img/energie-stromerzeugung/home/erzeugen.jpg';
import useDocumentTitle from "../../../../utils/UseDocumentTitle";

const TitleSeite = () => {
    useDocumentTitle('Energie-Stromerzeugung | Home');

    return (
        <div>
            <Container fluid>

                <h2 className="H2">Wie wird aus Energie Strom erzeugt ?</h2>
                <Row className="div">
                    <p className="introduction">In der heutigen Zeit wäre die ganze Welt ohne <strong>Strom</strong> Komplet
                        aufgeschmissen, wir wären nicht mehr lebensfähig. Der Strom wird
                        überall gebraucht, im <strong>Haushalt</strong>, im <strong>Beruf</strong> und im öffentlichen <strong>Leben</strong>.
                        Doch wie wird Strom erzeugt? Das ist die <strong>Frage</strong>, die wir uns heute stellen.
                    </p>
                </Row>
                <Row className="GreenRow">
                    <Col>
                        <div className="TextLeft">
                            Elektrische Energie, umgangssprachlich Strom genannt, wird durch
                            <strong>Umwandlung</strong> aus anderen <strong>Energieformen</strong> erzeugt. Wobei „erzeugt“
                            physikalisch genommen nicht richtig ist, denn Energie kann nicht
                            einfach entstehen, sondern nur aus einer <strong>Energieform</strong> in eine andere
                            <strong>umgewandelt</strong> werden.
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
                            Ein einfaches Beispiel ist der <strong>Fahrraddynamo</strong>.
                            Durch die Bewegung des Rades dreht sich eine im <strong>Dynamo</strong>
                            enthaltener <strong>Permanentmagnet</strong> in einer feststehenden
                            <strong>Induktionsspule</strong>. Dadurch wird ein <strong>Stromfluss</strong> erzeugt, der
                            die <strong>Fahrradlampe</strong> zum Leuchten bringt. Ein ähnliches Prinzip
                            verwendet auch ein <strong>Kraftwerksgenerator</strong>.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'> Kraftwerkarten</h4>
                <Row className="GreenRow">
                    <Col>
                        <div className="TextLeft">
                            Kraftwerke werden nach der <strong>Art</strong>, wie in ihnen Strom gewonnen
                            wird, unterschieden. Es gibt <strong>Wasserkraftwerken</strong>, <strong>Windkraftwerken</strong>,
                            <strong>Solaranlagen</strong>, <strong>Biomassekraftwerken</strong>, <strong>Gasturbinenkraftwerken</strong>,
                            <strong>Kernenergieanlagen</strong>, <strong>Kohlekraftwerken</strong> und viele andere Arten.
                            Das <strong>Prinzip</strong> bleibt, aber bei allen Kraftwerken das Gleiche.
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