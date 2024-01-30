import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function NotFoundPage() {
    return (
        <div>
            <h2>NotFoundPage</h2>
            Not Found
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <h1>Hello React Router DOM</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/topics">Topics</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/*">NotFoundPage</a></li>
            </ul>
            <Router>
                <Routes> {/* react-router-dom 버전 6 이상 부터는 Routes로 감싸줘야 함*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/topics" element={<Topics/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/*" element={ <NotFoundPage /> } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
