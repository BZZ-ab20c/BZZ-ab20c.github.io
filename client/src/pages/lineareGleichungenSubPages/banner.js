import Arr from "../../img/lineargleichungen/arr.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css'
import {Link} from "react-router-dom";
import Wave01 from "../../img/lineargleichungen/wave-01.png";
import React from "react";

const LineareGleichungenBanner = (props) => {
    const backbutton = props.backbutton;
    const title = props.title;
    return (
        <>
            <section id="banner">
                {backbutton ? (
                    <div className="back-btn">
                        <Link to={"/linearegeleichungen"}> {/*todo: Link richtig machen*/}
                            <div className="btn">
                                <img className="arr-img" src={Arr} alt={"arr img"}/>
                            </div>
                        </Link>
                    </div>
                ) : (<div/>)
                }
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{title}</h1>
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
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"wave img"}/>
            </div>
        </>
    )
}

export default LineareGleichungenBanner;