import React from 'react';
import Converter from './Converter';
import Quiz from './Quiz';
import Lottie from 'react-lottie-player'
import lottieJson from '../lottie.json'
import useDocumentTitle from "../../../utils/UseDocumentTitle";
import {useState} from "react";


import celsius from '../img/celsius.png';
import fahrenheit from '../img/fahrenheit-degrees.png';

const Main = () => {
    useDocumentTitle('Temperatur');

    const [play, setPlay] = useState(false);

    function startPlay() {
        setPlay(true);
    }

    function stopPlay() {
        setPlay(false);
    }
    return (
        <main id="main">
            <section id="infos" className="infos">
                    <div className="container">
                        <div className="section-title">
                            <h2>Was ist Temperatur</h2>
                            <p>Die Temperature ist ein Mass für die mittlere Bewegungsenergie der Moleküle eines
                                Stoffes. Wenn man
                                mit der
                                Hand einen Körper berührt, so spürt man, ob diser kalt oder warm ist. Der Menschen ist
                                jedoch nur
                                begrenzt
                                in der Lage, die Temperature eines Körpers zu spüren. Aus diesem Grund versucht man in
                                den
                                Naturwissenshaften und in der Technik Messgeräte einzusetzen, durch welche man die
                                Temperatur
                                ermitteln
                                kann.</p>
                        </div>

                        <div className="row content">
                            <div className="col-md-5" onMouseEnter={startPlay} onMouseLeave={stopPlay}>
                                <Lottie
                                    className={"img-fluid"}
                                    animationData={lottieJson}
                                    mode={"bounce"}
                                    speed={2}
                                    play={play}
                                    loop
                                    style={{width: "400px", height: "400px", background: "#FFFFFF"}}
                                />

                            </div>
                            <div className="col-md-7 pt-4">
                                <h3>Kelvin</h3>
                                <h4>Einheit <strong>°K</strong></h4>
                                <p className="fst-italic">
                                    Die Kelvinskala ist die in der Physik gebräuchliche Skala und wurde eingeführt, um
                                    das Problem
                                    der
                                    Abhängigkeit von zwei Fixpunkten zu umgehen. Die Kelvin Skala wird von dem
                                    Britischen Physiker
                                    <strong><em>William Load Kelvin</em></strong> benannt und wird Im
                                    Jahr <strong>1954 </strong>ist
                                    die
                                    Kelvinskala vom internationalem Komitee für Mass und Gewicht einführt worden. Die
                                    Kelvin Skala
                                    bezieht
                                    sich dabei nur auf einen einzigen Fixpunkt: den absoluten Nullpunkt.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check">Der absolute Nullpunkt ist die niedrigste Temperatur,
                                        die überhaupt
                                        möglich ist
                                        und liegt bei <strong>-273,15°C = 0 K</strong>. Man spricht daher statt von
                                        Kelvinskala auch
                                        von absoluten
                                        Temperaturskala</i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src={celsius} alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">
                                <h3>Celsius</h3>
                                <h4>Einheit <strong>°C</strong></h4>
                                <p className="fst-italic">
                                    Die Celsius Skala sollte alle bekannt sein. Wir finden sie in haushaltsüblichen
                                    Thermometer. Die
                                    Celsius
                                    Skala bezieht sich auf zwei Fixpunkte:
                                </p>
                                <ul>
                                    <li><i className="bi bi-check">Den Schmelupunkt oder Gefrierpunkt des Wasser.</i>
                                    </li>
                                    <li><i className="bi bi-check">Den Siedepunkt des Wasser .</i></li>
                                </ul>
                                <p>
                                    Der Schmelzpunkt des Wasser erhält die 0°C und der Seidepunkt des Wasser die 100°C.
                                    Der Abstand
                                    zwischen den beiden Punkten wird in 100 gleiche Teile zerlegt und bildet die Celsius
                                    Skala.
                                    Vorgeschlagen wurde die 100-teilige Skala von <strong>Andres Celsius</strong> einem
                                    Schwedischen
                                    Astronem, Mathematiker und Physiker im Jahre <strong>1792</strong>. Im gegebenSatz
                                    zur heute
                                    verwendeten Celsius Skala legte er den Siedepunkt von Wasser mit 0° und den
                                    Schmelzpunkt mit
                                    100° fest. Erst später wurden die Fixpunkte der Skala vertauscht, was zur heutigen
                                    From der
                                    Skala führte. Das Problem bei der Festlegung der Celsius-Skala ist die Abhängigkeit
                                    von zwei
                                    Fixpunkte. Vor allen der Siedepunkt des Wasser ist stark abhängig vom äußeren
                                    Luftdruck. Der
                                    Luftdruck wiederum ist abhängig von der Höhenlage des Messortes und der Wetterlage.
                                    Unterschiedliche Luftdrücke führen also zu unterschiedlichen Temperaturen für den
                                    Siedepunkt des
                                    Wassers.
                                </p>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-md-5">
                            <img src={fahrenheit} alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>Fahrenheit</h3>
                                <h4>Einheit <strong>°F</strong></h4>
                                <p>
                                    Fahrenheit entwickelte seine Temperaturskala nach einem Besuch bei dem Dänischen
                                    Astronomen OLE
                                    Romer in <em>Kopenhagen</em> Romer entwickelte das erste Thermometer, bei dem er für
                                    die
                                    Kalibierung zwei Fixpunkte verwendete. in der RomerSkala liegt der Grrierpunkt des
                                    Wassers bei
                                    7,5 Grad, der Seidpunkt bei 60 Grad und die duchschnittliche Körpertemperatur eines
                                    Menschen
                                    damit bei 22,5 Grad auf Romers Einleitung.
                                    Im Jahre 1708-1709 erlebte <strong> Daniel Gabriel Fahrenheit</strong> die tiefste
                                    Temperatur
                                    des strengen Winter in seiner Heimatstadt <em>Danzig</em>. Mit einer Mischung aus
                                    Eis, Wasser
                                    und Salmiak oder Seesalz konnte er danach den Nullpunkt bzw. ersten Fixpunt wieder
                                    herstellen
                                    -17,77 °C. Fahrenheit wollte dadurch negative Temperaturen vermeiden, wie sie bei
                                    der
                                    Romer-Skala schon im normalen Alltagsgebrauch auftraten. Als zweiten und dreiten
                                    Fixpunk legt er
                                    <strong>1714</strong> den Gefrierpunkt des reinen Wassers bei 32°F und die
                                    Körpertemperatur
                                    eines gesundes Menschen bei 96°f wie Gleich 37°C fest.
                                </p>
                                <br/>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                            <th scope="col">Fixpunkt</th>
                            <th scope="col">Schmelzpunkt</th>
                            <th scope="col">Siedepunkt</th>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Celsius-Skala T in °C</th>
                                <td>0 °C</td>
                                <td>100 °C</td>
                            </tr>
                            <tr>
                                <th scope="row">Kelvin-Skala T in °K</th>
                                <td>273,15 °K</td>
                                <td>373,15 °K</td>
                            </tr>
                            <tr>
                                <th scope="row">Fahrenheit-Skala T in °F</th>
                                <td>32 °F</td>
                                <td>212 °F</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            <br />
            <Converter />

            <br />
            {/* <span id="QuizSection">Quiz</span>  */}
            <Quiz />

        </main>
    );
};

export default Main;
