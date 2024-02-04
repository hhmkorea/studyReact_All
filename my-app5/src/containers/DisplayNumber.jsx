import DisplayNumber from "../components/DisplayNumber";
import React, { Component } from "react";
import {connect} from "react-redux";
import store from "./store";

export default connect()(DisplayNumber);
/*

export default class extends Component {
    state = {number:store.getState().number}
    constructor(props) {
        super(props);
        store.subscribe(function () {
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render() {
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
}*/
