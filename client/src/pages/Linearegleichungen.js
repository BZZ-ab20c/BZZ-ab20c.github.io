import Navigation from "../components/Navigation";
import MathImg from "../img/lineargleichungen/math-img.jpg";
import Wave01 from "../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/lineareGleichungen/index.css'

const Linearegleichungen = () => {
    return (
        <div className="container">
            <Navigation/>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Lineare Gleichungssysteme</h1>
                        </div>
                        <div className="w-100"/>
                        <div className="col">
                            Willkommen beim
                            <span className="tag-01"><a id="link-01" href="https://www.bzz.ch/"
                                                        target="_blank">BZZ</a></span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"Wave img idk"}/>
            </div>
            <section id="second-banner">
                <div className="container">
                    <div className="col-01">
                        <p>
                            <h2>Inhalt</h2>
                        </p>
                    </div>
                </div>
            </section>
            <section id="section-txt">
                <div className="container">
                    <div className="row">
                        <div className="sb-div-left">
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="sb-div-right-img">
                            <img className="math-img" src={MathImg} alt={"Math img or something idk"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-btn-title">
                <div className="container">
                    <div className="row">
                        <div className="tag-02">
                            <p>
                                Systeme
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tag-03">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut
                            labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-btn">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="btn-01">
                                <a className="link" href="am.html">
                                    <div className="btn-01-1">
                                        <p className="btn-01-1-txt">Additionsmethode</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="btn-02">
                                <a className="link" href="subm.html">
                                    <div className="btn-02-2">
                                        <p className="btn-02-2-txt">Subtitutionsmethode</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Linearegleichungen;