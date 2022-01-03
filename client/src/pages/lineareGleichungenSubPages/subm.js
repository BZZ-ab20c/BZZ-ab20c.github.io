import Wave01 from "../../img/lineargleichungen/wave-01.png";

const SUBM = () => {
    return (
        <div className={"container"}>
            {/*Banner*/}
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Substitutionsverfahren</h1>
                        </div>
                        <div className="w-100"/>
                        <div className="col">
                            Lernset vom
                            <span className="tag-01"><a id="link-01" href="https://www.bzz.ch/" target="_blank">BZZ</a></span>
                            {/*Todo: Kennzeichnung das BZZ ein Link ist*/}
                        </div>
                    </div>
                </div>
            </section>
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"wave img"}/>
            </div>
            <section id="math">
                <div class="container-fluid">
                    <div class="row">
                        <div class="m-div-left">
                            heloo
                        </div>
                        <div class="m-div-right">
                            hello
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default SUBM;