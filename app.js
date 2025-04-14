import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id: "parent"},
    [React.createElement("h1",{},"Hi from React that is installed by npm"),
        React.createElement("h2",{},"how are my project, its looking good 😘"),
        React.createElement("div",{id:"child"},
            React.createElement("h1",{},"hi from child")
        )
    ])

    const Root  = ReactDOM.createRoot(document.getElementById("root"))

    Root.render(heading);
