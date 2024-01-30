import React, {Component} from 'react';

class CreateContent extends Component {
    render() {
        //console.log('CreateContent render');
        /* this.props.title = "hi"; -------------> ERROR 발생
            하위 컴포넌트가 상위 컴포넌트로 데이터 전달할때는 props값을 바꿀수가 없음.
            setState() 함수를 활용한 이벤트 사용함. ---> App.js 참고 */

        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                      onSubmit={function (e) {
                          e.preventDefault();
                          this.props.onSubmit(
                              e.target.title.value,
                              e.target.desc.value
                          );
                          alert('Submit!!!');
                      }.bind(this)}
                >
                    {/* placeholder():input안에 아무것도 입력되지 않았을때 기본으로 보이는 문자 */}
                    <p><input type="text" name="title" placeholder="title"></input> </p>
                    <p><textarea name="desc" placeholder="description"></textarea> </p>
                    <p><input type="submit"></input> </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;
