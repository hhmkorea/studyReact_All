import React, {Component} from "react";

export default class DisplayNumber extends Component {
    render() {
        return (
            <div>
                <h1>DisplayNumber</h1>
                합 : <input type="text" value={this.props.number} readOnly></input>
            </div>
        );
    }
}