import useDocumentTitle from "../utils/UseDocumentTitle";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    useDocumentTitle('Home');

    return (
        <div className={"container"}>
            <h1>Webseite der Klasse Ab20C!</h1>

        </div>
    )
}

export default MainPage;