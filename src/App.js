import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <h1>Hello World</h1>;
}

const DOMRoot = document.getElementById("root");
const root = createRoot(DOMRoot); 
root.render(<App />);
