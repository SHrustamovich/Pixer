import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Root from "./companents/Root.jsx";
import "./assets/style/style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
);
