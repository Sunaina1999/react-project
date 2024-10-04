import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div",
    {id:"parent"},
    [
        React.createElement("div",
            {id:"child"},
            [
                React.createElement("h1",
                    {},
                "Im h1"),
                React.createElement("h2",
                    {},
                "Im h2")
            ]
            
        ),
        React.createElement("div",
            {id:"child2"},
            [
                React.createElement("h1",
                    {},
                "Im h1"),
                React.createElement("h2",
                    {},
                "Im h2")
            ]
            
        )
    ]
    
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);