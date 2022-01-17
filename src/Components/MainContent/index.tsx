import React from "react";
import DriverForm from "../DriverForm";
import AdvertizingInfo from "../AdvertisingInfo";

import "./styles.scss";

const MainContent = () => {
    return (
        <div className="container d-flex align-items-start align-items-md-center main-content">
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

export default MainContent