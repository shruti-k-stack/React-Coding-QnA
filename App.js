import React from "react";
import ReactDOM from "react-dom/client";
import "./src/styles/accordion.scss";
import AllInOne from "./src/Components/AllInOne";

const AppLayout = () => {
  return (
    <div>
      <h1> Hello World!</h1>
      <AllInOne />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
