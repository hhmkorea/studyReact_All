import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink as Link, useParams,
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

let contents = [
    {id:1, title:'HTML', description:'HTML is ...'},
    {id:2, title:'JS', description:'JS is ...'},
    {id:3, title:'React', description:'React is ...'},
];
function Topic() {
    let params = useParams();
    let topic_id = params.topic_id;
    let seleted_topic = { // 초기값 
        title: 'Sorry',
        description: 'Not Found'
    };
    for(let i=0; i<contents.length; i++) {
        if(contents[i].id === Number(topic_id)) { // contents 배열의 id와 클릭한 id 값이 동일하면
            seleted_topic= contents[i];
            break;
        }
    }
    console.log(params);

    return (
        <div>
            <h3>{seleted_topic.title}</h3>
            {seleted_topic.description}
        </div>
    );
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
                <Route path="/topics" element={<Topics/>}/>
                    <Route path=":topic_id" element={<Topic/>}/> {/* topics 하위 아이템 출력방식 */}
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
