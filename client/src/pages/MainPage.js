import useDocumentTitle from "../utils/UseDocumentTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";

const MainPage = () => {
    useDocumentTitle('Home');
    let contributors = [];

    useEffect(() => {
        const url = "https://api.github.com/repos/BZZ-ab20c/BZZ-ab20c.github.io/contributors"

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                for (let i = 0; i < json.length; i++) {
                    const user = json[i];
                    contributors.push(user);
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData()
    }, [])

    const [currentContributor, setCurrentContributor] = useState(0);

    return (
        <div className={"container"}>
            <h1>Webseite der Klasse Ab20C!</h1>
            {/*{contributors[currentContributor].map((contributor) => (*/}
            {/*    <div>*/}
            {/*        <p>{contributor.login}</p>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    )
}

export default MainPage;