import Navigation from "../components/Navigation";

const LineareFunktionen = () => {
    return (
        <div>
            <Navigation/>
            <div className={"container"}>
                <h1>Theorie Lineare-Funktionen / Geradengleichungen</h1>
                <p>Legende:
                    <br/>
                    Lineare-Funktionen = Geradengleichungen
                    <br/>
                    m = Steigung
                    <br/>
                    b = y-Achsenabschnitt
                </p>
            </div>

            <iframe title={"Lineare Funktionen"} src={'/pages/lineareFunktionenSubPages/Tool.html'}/>
        </div>
    );
}

export default LineareFunktionen;