import LineareGleichungenBanner from "./banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import useDocumentTitle from "../../utils/UseDocumentTitle";

const AM = () => {
    useDocumentTitle('Linearegleichungen | AM');

    return (
        <div className={"container"}>
            <LineareGleichungenBanner backbutton={true}/>
        </div>
    );
}

export default AM;