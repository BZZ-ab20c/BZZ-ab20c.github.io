const LineareFunktionen = () => {
    return (
        <div>
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

            <div style={{height: "100vh"}}>
                <iframe title={"Lineare Funktionen"} src={'https://bzz-ab20c.github.io/'}
                        style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    );
}

export default LineareFunktionen;