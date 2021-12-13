import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';

import  {Navigation} from './Navigation/Navigation';
import './TitleSeite.css';
import classes from '../hoc/style.css';


export const TitleSeite = (props) => {
   return(
      <div>
         <Navigation />
         <Container fluid >
        <Row className="Background">
        </Row>
        <h1 className="Title">Energie Stromerzeugung</h1>

        <h2 className="H2">Wie wird aus Energie Strom erzeugt ?</h2>
        
        <Row className="WhiteRow">
           <p>In der heutigen Zeit wäre die ganze Welt ohne Strom Komplet 
              aufgeschmissen, wir wären nicht mehr lebensfähig. Der Strom wird 
              überall gebraucht, im Haushalt, im Beruf und im öffentlichen Leben. 
              Doch wie wird Strom erzeugt? Das ist die Frage, die wir uns heute  stellen.
            </p>
        </Row>
        <Row className="GreenRow">
           <Col>
           <div className="Text">In der heutigen Zeit wäre die ganze Welt ohne Strom Komplet 
              aufgeschmissen, wir wären nicht mehr lebensfähig. Der Strom wird 
              überall gebraucht, im Haushalt, im Beruf und im öffentlichen Leben. 
              Doch wie wird Strom erzeugt? Das ist die Frage, die wir uns heute  stellen.
            </div>
            </Col>
            <Col>

            </Col>
        </Row>
        <Row className="WhiteRow">
           <Col>
            <div className="Text">In der heutigen Zeit wäre die ganze Welt ohne Strom Komplet 
              aufgeschmissen, wir wären nicht mehr lebensfähig. Der Strom wird 
              überall gebraucht, im Haushalt, im Beruf und im öffentlichen Leben. 
              Doch wie wird Strom erzeugt? Das ist die Frage, die wir uns heute  stellen.
            </div>
            </Col>
            <Col>
            
            </Col>
        </Row>
      </Container>
      </div>
   );
}