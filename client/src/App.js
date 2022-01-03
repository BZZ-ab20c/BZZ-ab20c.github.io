import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="container">
            <Navigation/>
            <h1>Website der Klasse AB20C</h1>
        </div>
    );
}

export default App;