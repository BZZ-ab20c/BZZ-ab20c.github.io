import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from 'react-bootstrap';

import generator from '../../../../img/energie-stromerzeugung/generator/generator.jpg';
import drehgenerator from '../../../../img/energie-stromerzeugung/generator/drehgenerator.jpg';
import drehgeneratorGif from '../../../../img/energie-stromerzeugung/generator/drehgenerator.gif';

export const Generator = () => {
    return (
        <div>
            <Container fluid>
                <h2 className="H2">Generator</h2>
                <Row className="div">
                    <p className="introduction">
                        Jetzt wisst ihr zwar, wie der Ablauf läuft bei der "Stromerzeugung",
                        aber wie der Generator den Strom "erzeugt" schauen wir uns jetzt an.
                    </p>
                </Row>
                <h4 className="H4"> Drehgenerator</h4>
                <Row className="RedRow">
                    <Col>
                        <div className="TextLeft">
                            Die häufigste Generatoren Art ist der Drehgenerator. Er besteht
                            hauptsächlich aus zwei Teilen: einem festen Teil dem Stator und
                            einem beweglichen Teil dem Rotor. Auf der Antriebswelle des Rotors
                            ist ein Magnet befestigt, der sich von aussen zugeführter mechanischer
                            Energie dreht. Im Stator sind mehrere Spulen mit einem Eisenkern befestigt.
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
                            An den Spulen befinden sich die elektrischen Anschlüsse. Dreht sich der
                            Magnet im Generator, wirkt die Lorentzkraft auf die Ladungen und bringt
                            diese in Bewegung. Durch diese Ladungsverschiebung wird eine Potentialdifferenz
                            bewirkt und eine elektrische Spannung erzeugt: Es wird Wechselstrom erzeugt.
                            Dieser Wechselstrom kann dann in das Stromnetz eingespeist werden.
                        </div>
                    </Col>
                </Row>
                <h4 className='H4'>Einsatz</h4>
                <Row className="RedRow">
                    <Col>
                        <div className="TextLeft">
                            In den meisten Kraftwerken entsteht elektrische Energie in einem
                            oder mehreren Generatoren aus mechanischer Energie. Insbesondere gilt
                            dies für Wasserkraftwerke, Windenergieanlagen und alle Arten von
                            Wärmekraftwerken Kraftwerke, gleichgültig ob die Wärme durch Verbrennung
                            von Brennstoffen oder in einem Kernreaktor hergestellt wird. Im Falle
                            von Wärmekraftwerken werden praktisch immer Turbogeneratoren eingesetzt.
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