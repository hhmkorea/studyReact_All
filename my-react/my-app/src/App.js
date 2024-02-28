import './App.css';
import Wood from "./Wood";

function App() { //A

    let list = [1, 2, 3];

    return (
        <div>
            <div>
                {list.map((n) => (n))}
            </div>
            <div>
                {list.map((n) => (
                    <h1>{n}</h1>
                ))}
            </div>
        </div>
    );
}

export default App;
