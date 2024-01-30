import React, {Component} from 'react';
import TOC from './components/TOC';
import './App.css';
import Content from './components/ReadContent';
import Subject from './components/Subject';
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
    constructor(props) {
        super(props);
        // 상위 컴포넌트가 하위 컴포넌트에게 어떤 데이터를 전달할 때는 props를 쓴다.
        this.max_content_id = 3;
        this.state = {
            mode: 'read',
            selected_content_id: 2,
            subject: {title: 'WEB', subtitle: 'World Wide Web!'},
            welcome: {title: 'Welcome', desc: 'Hello, React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
            ]
        }
    }

    getReadContent() {
        let i = 0;
        while (i < this.state.contents.length) {
            let data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
            }
            i = i + 1;
        }
    }

    getContent() {
        let _title, _desc, _article, _content = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === "read") {
            _content = this.getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        } else if (this.state.mode === 'create') {
            _article = <CreateContent onSubmit={function (_title, _desc) {
                this.max_content_id = this.max_content_id + 1; // Create할때만 필요!

                // Array.from() 복사 후 push() : 사본에 push, 원본 변경하지않고 교체.
                let _contents = Array.from(this.state.contents);
                _contents.push(
                    {id: this.max_content_id, title: _title, desc: _desc}
                );

                // push
                // var _contents = this.state.contents.push(
                //     {id:this.max_content_id, title:_title, desc:_desc}
                // );

                // concat
                // let _contents = this.state.contents.concat(
                //     {id: this.max_content_id, title: _title, desc: _desc}
                // )

                /* ** 배열에 데이터 추가하는 방법 **
                 1. push():원본을 변경하고 추가함.
                 2. concat():concatenate, 결합하다. 원본을 복제해서 사본을 변경, 원본을 변경하지 않음. */

                this.setState( {
                    contents: _contents,
                    mode:'read',
                    selected_content_id:this.max_content_id
                });
                console.log(_title, _desc);
            }.bind(this)}></CreateContent>
        } else if (this.state.mode === 'update') {
            _content = this.getReadContent();
            _article = <UpdateContent data={_content} onSubmit={
                function (_id, _title, _desc) {
                    let _contents = Array.from(this.state.contents);
                    let i = 0;
                    while (i < _contents.length) {
                        if(_contents[i].id === _id) {  // 입력받은 id값(_id)과 읽어온 값과 비교해서 등일하면
                            _contents[i] = {id:_id, title:_title, desc:_desc};
                            break;
                        }
                        i = i + 1;
                    }

                    this.setState( {
                        contents: _contents,
                        mode:'read'
                    });
                    console.log(_title, _desc);
                }.bind(this)}></UpdateContent>
        }
        return _article;
        {/* _article 출력 */
        }
    }

    render() {
        //console.log('App render');
        return (
            <div className="App">
                {/* setState() : 각 컴포넌트 render 함수가 다시 호출됨. */}
                {/* bind() : 강제로 this 값을 주입하는 함수. */}
                {/* onChangePage() : <a> 태그가 클릭되었을때 설정한 함수 실행. */}
                <Subject
                    title={this.state.subject.title}
                    subtitle={this.state.subject.subtitle}
                    onChangePage={function () {
                        this.setState({mode: 'welcome'});
                    }.bind(this)}></Subject>
                <TOC onChangePage={function (id) {
                    this.setState({
                        mode: 'read',
                        selected_content_id: Number(id) // Number() : 문자를 숫자로 강제로 바꿔줌.
                    });
                }.bind(this)}
                     data={this.state.contents}></TOC>
                <Control onChangeMode={function (_mode) {
                    this.setState({
                        mode: _mode
                    });
                }.bind(this)}></Control>
                {this.getContent()} {/* getContent 출력 */}
            </div>
        );
    }
}


export default App;