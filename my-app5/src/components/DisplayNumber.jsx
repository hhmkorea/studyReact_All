import React, {Component} from "react";
import store from "../store";

export default class DisplayNumber extends Component {
    state = {number:store.getState().number}
    constructor(props) {
        super(props);
        store.subscribe(function () {
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render() {
        return (
            <div>
                <h1>DisplayNumber</h1>
                합 : <input type="text" value={this.state.number} readOnly></input>
            </div>
        );
    }
}