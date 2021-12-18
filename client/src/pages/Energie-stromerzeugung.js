import Navigation from "../components/Navigation";
import {TitleSeite} from "../containers/energie-stromerzeugung/TitleSeite";
import Layout from "../hoc/energie-stromerzeugung/Layout/Layout";

const EnergieStromerzeugung = () => {
    return (
        <Layout className="App">
            <Navigation/>
            <TitleSeite/>
        </Layout>
    );
}

export default EnergieStromerzeugung;