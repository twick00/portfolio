import React from 'react';

const Banner = (props) => {
    return (
        <section id="home" className="section-overlay bg-no-repeat bg-cover bg-fixed bg-center-center"
                 style={{backgroundImage: "url(https://images.pexels.com/photos/1007957/pexels-photo-1007957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}}>
            <div className="section-overlay-in opacity7 dark-bg">
            </div>
            <div className="container z-index1 position-relative-m">
                <div
                    className="row no-gutters justify-content-center align-items-center full-screen p-100px-tb sm-p-80px-t sm-p-0px-b">
                    <div className="col-md-12 m-50px-t sm-m-30px-t sm-m-60px-b text-center">
                        <h1 className="font-alt color-white font-w-700 m-0px"><span>I AM TYLER</span></h1>
                        <p className="color-white font-22 md-font-16 sm-font-12 p-10px-tb m-0px"><span
                            className="font-w-700" id="type-it"></span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
