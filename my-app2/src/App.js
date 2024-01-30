import React, {useState, useEffect} from "react";
import './App.css';

function App() {
    let [funcShow, setFuncShow] = useState(true);
    let [classShow, setClassShow] = useState(true);

    return (
        <div className="container">
            <h1>Hello World</h1>
            <input type="button" value="remove func" onClick={
                function () {
                    setFuncShow(false);
                }}></input>
            <input type="button" value="remove class" onClick={
                function () {
                    setClassShow(false);
                }}></input>
            {funcShow ? <FunComp initNumber={2}></FunComp> : null}
            {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
        </div>
    );
}

let funcStyle = 'color:blue';
let funcId = 0;

function FunComp(props) {
    let numberState = useState(props.initNumber);
    let number = numberState[0];
    let setNumber = numberState[1];

    let [_date, setDate] = useState((new Date()).toString()); // usetState 2개의 배열 값이 자동으로 할당됨.

    // side effect
    useEffect(function () {
        console.log('%cfunc => useEffect (componentDidMount) ' + (++funcId), funcStyle);
        document.title = number;
        return function () {
            console.log('%cfunc => useEffect return (componentWillUnMount) ' + (++funcId), funcStyle);
        }
    }, []);

    useEffect(function () {
        console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
        document.title = number;
        return function () {
            console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
        }
    }, [number]);

    useEffect(function () {
        console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
        document.title = _date;
        return function () {
            console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
        }
    }, [_date]);

    console.log('%cfunc => render ' + (++funcId), funcStyle);

    return (
        <div className="container">
            <h2>function style component</h2>
            <p>Number : {number}</p>
            <p>Date : {_date}</p>
            <input type="button" value="random" onClick={
                function () {
                    setNumber(Math.random());
                }}></input>
            <input type="button" value="date" onClick={
                function () {
                    setDate((new Date()).toString());
                }}></input>
        </div>
    );
}

let classStyle = 'color:red';

class ClassComp extends React.Component {
    state = {
        number: this.props.initNumber,
        date: (new Date()).toString()
    }

    // React 17.0 버전에서는 componentWillMount 삭제.
    UNSAFE_componentWillMount() {
        console.log('%cclass => componentWillMount', classStyle);
    }

    componentDidMount() {
        console.log('%cclass => componentDidMount', classStyle);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('%cclass => shouldComponentUpdate', classStyle);
    }

    // React 17.0 버전에서는 componentWillUpdate 삭제하고 componentDidUpdate와 같이 쓰이게 됨.
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('%cclass = > componentWillUpdate', classStyle);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('%cclass => componentDidUpdate', classStyle);
    }

    render() {
        console.log('%cclass => render', classStyle);
        return (
            <div className="container">
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <p>Date : {this.state.date}</p>
                <input type="button" value="random" onClick={
                    function () {
                        this.setState({number: Math.random()});
                    }.bind(this)}></input>
                <input type="button" value="date" onClick={
                    function () {
                        this.setState({date: (new Date()).toString()});
                    }.bind(this)}></input>
            </div>
        );
    }
}

export default App;
