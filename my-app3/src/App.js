import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink as Link,
} from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
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

function HTML() {
    return (
        <div>
            <h2>HTML</h2>
            HTML is ...
        </div>
    )
}

function JS() {
    return (
        <div>
            <h2>JS</h2>
            JS is ...
        </div>
    )
}

function React() {
    return (
        <div>
            <h2>React</h2>
            React is ...
        </div>
    )
}


function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to="/topics/1">HTML</Link></li>
                <li><Link to="/topics/2">JS</Link></li>
                <li><Link to="/topics/3">React</Link></li>
            </ul>
            <Routes>
                <Route path="/topics/1" element={<HTML/>}/>
                <Route path="/topics/2" element={<JS/>}/>
                <Route path="/topics/3" element={<React/>}/>
            </Routes>
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
                    <li><Link to="/topics/*">Topics</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/topics/*" element={<Topics/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
