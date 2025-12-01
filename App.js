import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./src/Components/Accordion";
import "./src/styles/style.scss";

const AppLayout = () => {
    return (
    <div>
        <h1> Hello World!</h1>
        <Accordion />
    </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);