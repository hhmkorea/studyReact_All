// App.js
function App() {
    return (
        <>
            <h1>Hellow World</h1>
            <A />
            <B />
        </>
    )
}

const dom = document.querySelector("#root");
ReactDOM.render(<App />, dom);