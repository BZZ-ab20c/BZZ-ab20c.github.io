import Wave01 from "../../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css'
import LineareGleichungenBanner from "./banner";

const SUBM = () => {
    return (
        <div className={"container"}>
            {/*Banner*/}
            <LineareGleichungenBanner backbutton={true}/>
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"wave img"}/>
            </div>
            <section id="math">
                <div className="container-fluid">
                    <div className="row">
                        <div className="m-div-left">
                            heloo
                        </div>
                        <div className="m-div-right">
                            hello
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default SUBM;