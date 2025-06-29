import './App.css';
import * as React from "react";
import Content from "./layout/Content.tsx";
import Footer from "./layout/Footer.tsx";

const App: React.FC = () => {

    return (
        <div className="App">
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default App
