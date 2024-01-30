import React, { Component } from 'react';

class Subject extends Component {
    render() {
        //console.log('Subject render');

        return (
            <header>
                <h1><a href="/" onClick={function (e) {
                    /* e : 이벤트 처리할 수 있게 함수에 주입된 정보,
                       e.priventDefault() : 링크를 클릭했을 때 페이지가 바뀌는 것을 막음. */
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.subtitle}
            </header>
        );
    }
}

export default Subject;
