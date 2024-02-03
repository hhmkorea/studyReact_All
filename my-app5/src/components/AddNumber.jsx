import React, {Component} from "react";
import store from "../store";

export default class AddNumber extends Component {
    state = { size:1 };

    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={function (e) {
                    store.dispatch({type:"INCREMENT", size:this.state.size});
                    // dispatch : 값과 type 전달
                }.bind(this)} ></input>
                <input type="text" value={this.state.size} onChange={function (e) {
                    if(e.target.value === "" || e.target.value === null) {
                        this.setState({size: parseInt(0)});
                    } else {
                        this.setState({size: parseInt(e.target.value)});
                    }
                }.bind(this)}></input>
            </div>
        );
    }
}