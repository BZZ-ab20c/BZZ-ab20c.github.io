import Navigation from "../components/Navigation";

const index = () => {
    return (
        <div className="container">
            <Navigation/>
            <section id="banner">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Lineare Gleichungssysteme</h1>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">
                            Willkommen beim
                            <span class="tag-01"><a id="link-01" href="https://www.bzz.ch/" target="_blank">BZZ</a></span>
                        </div>
                    </div>
                </div>
            </section>
            <div class="wave-01">
                <img class="wave-img" src="img/wave-01.png"></img>
            </div>
            <section id="second-banner">
                <div class="container">
                    <div class="col-01">
                        <p>
                        <h2>Inhalt</h2>
                        </p>
                    </div>
                </div>
            </section>
            <section id="section-txt">
                <div class="container">
                    <div class="row">
                        <div class="sb-div-left">
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div class="sb-div-right-img">
                            <img class="math-img" src="img/math-img.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-btn-title">
                <div class="container">
                    <div class="row">
                        <div class="tag-02">
                            <p>
                                Systeme
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="tag-03">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-btn">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="btn-01">
                                <a class="link" href="am.html">
                                    <div class="btn-01-1">
                                        <p class="btn-01-1-txt">Additionsmethode</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="btn-02">
                                <a class="link" href="subm.html">
                                    <div class="btn-02-2">
                                        <p class="btn-02-2-txt">Subtitutionsmethode</p>
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

export default index;