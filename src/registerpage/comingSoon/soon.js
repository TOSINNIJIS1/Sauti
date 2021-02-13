import React from "react";
// import Preloader from "./components/Preloader/Preloader";
import Timer from "./Timer";
// import Optin from "./components/Optin/Optin";

// import "./styles.css";

export default function Soon() {
    return (
        <div className="Soon">
            <div className="container">
                <h1>
                Website
                <br />
                Coming Soon
                </h1>
                <Timer />
                {/* <Optin /> */}
                {/* <Preloader /> */}
            </div>
        </div>
    )
}


