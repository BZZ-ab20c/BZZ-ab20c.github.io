import React from 'react';
import style from '../css/style.css';

const Converter = () => {
    const [temp, setTemp] = React.useState({ f: "", c: "", k: "" })

    const updateC = e => setTemp({
        c: e.target.value,
        f: (+e.target.value * 9 / 5 + 32).toFixed(2),
        k: (+e.target.value + 273.15).toFixed(2)
    })

    const updateF = e => setTemp({
        c: ((+e.target.value - 32) * 5 / 9).toFixed(2),
        f: e.target.value,
        k: ((+e.target.value - 32) / 1.8) + 273.15
    })

    const updateK = e => setTemp({
        c: (+e.target.value - 273.15).toFixed(2),
        f: ((+e.target.value - 273.15) * 1.8) + 32,
        k: e.target.value,
    })
    return (<>
        <section >
            <div className="signup-form">
                <form action="" method="">
                    <h2>Konverter</h2>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="number" name="celcius" id="celcius" className="input"
                                placeholder="Celcius"
                                value={temp.c}
                                onChange={updateC} ></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                            <input type="number" name="fahrenheit" id="fahrenheit" className="input" value={temp.f}
                                onChange={updateF} placeholder="Fahrenheit" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="number" name="kelvin" id="kelvin" className="input" placeholder="Kelvin" value={temp.k}
                                onChange={updateK} />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>);
};

export default Converter;
