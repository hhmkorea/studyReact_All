import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
        //console.log('Content render');
        /* this.props.title = "hi"; -------------> ERROR 발생
            하위 컴포넌트가 상위 컴포넌트로 데이터 전달할때는 props값을 바꿀수가 없음.
            setState() 함수를 활용한 이벤트 사용함. ---> App.js 참고 */

        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

export default ReadContent;
