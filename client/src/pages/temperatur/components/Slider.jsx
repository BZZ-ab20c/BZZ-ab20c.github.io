import React from 'react';

const Slider = () => {
    return (<>
        <div className='container my-4'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.shgcdn.com/6e838870-ec94-4e90-93ec-d37bd58afbb2/-/format/auto/-/preview/3000x3000/-/quality/lighter/" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://thefederal.com/file/2020/01/cooler-than-19th-century-696x421.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_103/f_auto,q_auto,w_1100/v1570810934/shape/mentalfloss/602955-leonid_ikan-gettyimages-1067764520.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>);
};

export default Slider;
