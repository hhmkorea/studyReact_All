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

let contents = [
    {id:1, title:'HTML', description:'HTML is ...'},
    {id:2, title:'JS', description:'JS is ...'},
    {id:3, title:'React', description:'React is ...'},
];
function Topic() {
    return (
        <div>
            <h2>Topic</h2>
            Topic ...
        </div>
    )
}
function Topics() {
    let list = [];
    for (let i=0; i<contents.length; i++) {
        list.push(
            <li key={contents[i].id}>
                <Link to={"/topics/" + contents[i].id}>
                    {contents[i].title}
                </Link>
            </li>
        );
    }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {list}
            </ul>
            <Routes>
                <Route path="/topics/:topic_id" element={<Topic/>}/>
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
