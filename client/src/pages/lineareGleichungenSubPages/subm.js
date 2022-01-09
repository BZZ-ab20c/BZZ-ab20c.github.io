import Wave01 from "../../img/lineargleichungen/wave-01.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/lineareGleichungen/sbs.css';
import LineareGleichungenBanner from "./banner";
import useDocumentTitle from "../../utils/UseDocumentTitle";

const SUBM = () => {
    useDocumentTitle('Linearegleichungen | SUBM');

    return (
        <div>
            {/*Banner*/}
            <LineareGleichungenBanner backbutton={true}/>
            <div className="wave-01">
                <img className="wave-img" src={Wave01} alt={"wave img"}/>
            </div>
            <section id="math">
                
            </section>
        </div>

    );
}

export default SUBM;