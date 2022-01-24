import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import generator from '../../../../img/energie-stromerzeugung/generator/generator.jpg';
import drehgenerator from '../../../../img/energie-stromerzeugung/generator/drehgenerator.jpg';
import drehgeneratorGif from '../../../../img/energie-stromerzeugung/generator/drehgenerator.gif';
import useDocumentTitle from "../../../../utils/UseDocumentTitle";

export const Generator = () => {
    useDocumentTitle('Energie-Stromerzeugung | Generator');

    return (
        <div>
            <Container fluid>
                <h2 className="H2">Generator</h2>
                <Row className="div">
                    <p className="introduction">
                        Jetzt wisst ihr zwar, wie der Ablauf läuft bei der <strong>Stromerzeugung</strong>,
                        aber wie der <strong>Generator</strong> den Strom <strong>erzeugt</strong> schauen wir uns jetzt an.
                    </p>
                </Row>
                <h4 className="H4"> Drehgenerator</h4>
                <Row className="RedRow">
                    <Col>
                        <div className="TextLeft">
                            Die häufigste Generatoren Art ist der <strong>Drehgenerator</strong>. Er besteht
                            hauptsächlich aus zwei Teilen: einem festen Teil dem <strong>Stator</strong> und
                            einem beweglichen Teil dem <strong>Rotor</strong>. Auf der Antriebswelle des Rotors
                            ist ein <strong>Magnet</strong> befestigt, der sich von aussen zugeführter <strong>mechanischer Energie </strong>
                            dreht. Im Stator sind mehrere Spulen mit einem <strong>Eisenkern</strong> befestigt.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={drehgenerator} alt={"drehgenerator"}/>
                    </Col>
                </Row>
                <Row className="WhiteRow">
                    <Col>
                        <img className="ImgLeft" src={drehgeneratorGif} alt={"drehgenerator gif"}/>
                    </Col>
                    <Col>
                        <div className="TextRight">
                            An den Spulen befinden sich die elektrischen <strong>Anschlüsse</strong>. Dreht sich der
                            Magnet im Generator, wirkt die <strong>Lorentzkraft</strong> auf die Ladungen und bringt
                            diese in <strong>Bewegung</strong>. Durch diese Ladungsverschiebung wird eine <strong>Potentialdifferenz </strong>
                            bewirkt und eine elektrische Spannung erzeugt: Es wird <strong>Wechselstrom</strong> erzeugt.
                            Dieser Wechselstrom kann dann in das <strong>Stromnetz</strong> eingespeist werden.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Einsatz</h4>
                <Row className="RedRow">
                    <Col>
                        <div className="TextLeft">
                            In den meisten Kraftwerken entsteht elektrische Energie in einem
                            oder mehreren <strong>Generatoren</strong> aus mechanischer <strong>Energie</strong>. Insbesondere gilt
                            dies für <strong>Wasserkraftwerke</strong>, <strong>Windenergieanlagen</strong> und alle anderen Arten von
                            Wärmekraftwerken gleichgültig, ob die Wärme durch Verbrennung
                            von <strong>Brennstoffen</strong> oder in einem <strong>Kernreaktor</strong> hergestellt wird. Im Falle
                            von Wärmekraftwerken werden praktisch immer <strong>Turbogeneratoren</strong> eingesetzt.
                        </div>
                    </Col>
                    <Col>
                        <img className="ImgRight" src={generator} alt={"generator"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}