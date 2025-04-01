import React from "react";
import "remixicon/fonts/remixicon.css";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

function App() {
    return (
    <>
        <Header/>
        <Body />
        <Footer />
    </>
    );
}

const DOMRoot = document.getElementById("root");
const root = createRoot(DOMRoot); 
root.render(<App />);
