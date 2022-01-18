import React from "react";
import DriverForm from "../../Components/DriverForm";
import AdvertizingInfo from "../../Components/AdvertisingInfo";

import "./styles.scss";

const Home = () => {
    return (
        <div className="container d-flex align-items-start align-items-md-center home">
            <div className="row">
                <div className="col-md-6">
                    <AdvertizingInfo />
                </div>
                <div className="col-md-6">
                    <DriverForm />
                </div>
            </div>
        </div>
    )
}

export default Home