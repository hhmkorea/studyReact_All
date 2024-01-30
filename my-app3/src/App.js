import './App.css';
import {
    HashRouter as Router,
    Routes,
    Route, Link
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
        <Router>
            <div className="App">
                <h1>Hello React Router DOM</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/*">NotFoundPage</Link></li>
                </ul>
                <Routes> {/* react-router-dom 버전 6 이상 부터는 Routes로 감싸줘야 함*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/topics" element={<Topics/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
