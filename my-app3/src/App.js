import './App.css';
import {
    HashRouter as Router,
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

function Topic() {
    return (
        <div>
            <h3>Topic</h3>
            Topic...
        </div>
    );
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
    {id: 1, title: 'HTML', description: 'HTML is ...'},
    {id: 2, title: 'JS', description: 'JS is ...'},
    {id: 3, title: 'React', description: 'React is ...'},
];

function Topics() {
    /*let lis = [];
    for (let i = 0; i < contents.length; i++) {
        lis.push(
            <li key={contents[i].id}>
                <Link to={"/topics" + contents[i].id}>
                    {contents[i].title}
                </Link>
            </li>
        );
    }*/
    return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li><Link to="/Topics/1">HTML</Link></li>
                    <li><Link to="/Topics/2">JS</Link></li>
                    <li><Link to="/Topics/3">React</Link></li>
                    {/*{lis}*/}
                </ul>
                <Routes> {/* react-router-dom 버전 6 이상 부터는 Routes로 감싸줘야 함*/}
                    <Route path="/Topics/1" element="HTML is ..."/>
                    <Route path="/Topics/2" element="JS is ..."/>
                    <Route path="/Topics/3" element="React is ..."/>
                </Routes>
                {/*<Route path="/topics/:topic_id" element={<Topic />}/>*/}
            </div>
    )
}

function App() {
    return (
        <Router>
            {/*
            Link : 페이지가 리로드 되지 않게 자동으로 구현하는 컴포넌트
            NavLink : Link 기능이 조금더 부가된 것.
                      네비게이션에 사용자가 위치한 곳을 표시해주는 class="active" 속성이 추가됨.
            */}
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
