const Klima = () => {
    return (
        <div className="container">
            <h1>Klima</h1>
            <p>Klima beschreibt, wie das Wetter über einen langen Zeitraum aussieht.
                <br/>Wenn es in einer Gegend über viele Jahre regnet, spricht man von einem feuchten Klima.
                <br/>Wenn die Temperaturen sich über viele Jahre verändern, spricht man vom Klimawandel.</p>
            <br/>
            <div className="row">
                <div id="smallNav" className="col-3 card">
                    <br/>
                    <nav>
                        <ul>
                            <li><a href="#wasIstKlima" className="link-dark">Was ist Klima?</a></li>
                            <li><a href="#natuerlicheAenderung" className="link-dark">Natürliche Änderungen</a>
                            </li>
                            <li><a href="#menschlicheAenderung" className="link-dark">Menschliche Änderungen</a>
                            </li>
                            <li><a href="#klimaWandel" className="link-dark">Klima Wandel</a></li>
                        </ul>
                    </nav>
                    <br/>
                </div>
                <div className="col-4">

                </div>
                <div className="col-3">
                    <img src="img/climate-change.png" style="position: absolute" height="250px" alt="Klima_Image1"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div style="background-color: #fcfcfc; padding: 25px; margin-bottom: 10px" id="wasIstKlima"
                     className="card col-7">
                    <h3>Was ist Klima?</h3>
                    <p>Das Klima ist das langfristige Muster des Wetters in einem Gebiet, typischerweise
                        gemittelt über einen Zeitraum von 30 Jahren. <br/>Genauer gesagt, ist es der Mittelwert
                        und die Variabilität der meteorologischen Variablen über einen Zeitraum von
                        Monaten bis zu Millionen von Jahren.</p>
                </div>
            </div>
            <div className="row">
                <div style="background-color: #eeeeee;  padding: 25px; margin-bottom: 10px"
                     id="natuerlicheAenderung"
                     className="card col-7">
                    <h3>Natürliche Änderungen</h3>
                </div>
            </div>
            <div className="row">
                <div style="background-color: #fcfcfc;  padding: 25px; margin-bottom: 10px"
                     id="menschlicheAenderung"
                     className="card col-7">
                    <h3>Menschliche Änderungen</h3>
                </div>
            </div>
            <div className="row">
                <div style="background-color: #eeeeee; padding: 25px; margin-bottom: 10px" id="klimaWandel"
                     className="card col-7">
                    <h3>Klima Wandel</h3>
                    <p>Der Klimawandel beschreibt eine Veränderung der durchschnittlichen Bedingungen - wie
                        Temperatur und
                        Niederschlag - in einer Region über einen längeren Zeitraum hinweg.<br/>
                        NASA-Wissenschaftler haben beobachtet, dass sich die Erdoberfläche erwärmt, und
                        viele der wärmsten Jahre
                        seit Beginn der Aufzeichnungen fanden in den letzten 20 Jahren statt.</p>
                    <h5>Treibhauseffekt</h5>
                    <p style="font-weight: bold">Kurz definiert:</p>
                    <p>Der Treibhauseffekt ist wenn Gase in der Erdatmosphäre die Wärme der Sonne einfangen.
                        <br/>Durch diesen Prozess wird die Erde viel wärmer, als sie es ohne Atmosphäre wäre.</p>
                </div>
                <div id="img" className="col">
                    <img src="img/greenhouseEffect.png" style="width:375px"/>
                </div>
            </div>
        </div>
    );
}

export default Klima;