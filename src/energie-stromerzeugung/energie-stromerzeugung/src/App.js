import 'bootstrap/dist/css/bootstrap.css';
import Layout from './hoc/Layout/Layout';

import { TitleSeite } from "./containers/TitleSeite";


function App() {
  return (
    <Layout className="App">
      <TitleSeite />
    </Layout>
  );
}

export default App;
