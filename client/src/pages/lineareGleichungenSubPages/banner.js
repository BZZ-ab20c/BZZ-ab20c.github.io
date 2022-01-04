import Arr from "../../img/lineargleichungen/arr.png";
import {Link} from "react-router-dom";

const LineareGleichungenBanner = () => {
    return (
        <section id="banner">
            <div className="back-btn">
                <Link to={"/"}> {/*Link richtig machen*/}
                    <div className="btn">
                        <img className="arr-img" src={Arr} alt={"arr img"}/>
                    </div>
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Substitutionsverfahren</h1>
                    </div>
                    <div className="w-100"/>
                    <div className="col">
                        Lernset vom
                        <span className="tag-01"><a id="link-01" href="https://www.bzz.ch/"
                                                    target="_blank">BZZ</a></span>
                        {/*Todo: Kennzeichnung das BZZ ein Link ist*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LineareGleichungenBanner;