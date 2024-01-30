import React, {Component} from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        /*console.log("===> TOC render shouldComponentUpdate",
            newProps.data,
            this.props.data
        );*/
        if(this.props.data === newProps.data) { // push()대신 concat()을 사용하는 이유.
            return false;
        } else {
            return true;
        }
        /* shouldComponentUpdate
         .. render 이전에 실행된다.
         .. 리턴값이 true이면 render가 호출되고 false면 render가 호출되지 않는다.
         .. newProps를 통해 바뀐 값을 알 수 있고 this.props.data를 통해 현재값을 알 수 있다. */
    }

    render() {
        //console.log('===> TOC render');

        const lists = [];
        const data = this.props.data;
        let i = 0;

        //debugger;

        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                       data-id={data[i].id}
                       onClick={function (e) {
                           e.preventDefault();
                           this.props.onChangePage(e.target.dataset.id); // 타겟의 id값을 받아서 넘김.
                       }.bind(this)}
                    > {data[i].title} </a>
                </li>
            );
            i = i + 1;
        }

        /*for (let i = 0; i < data.length; i++) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}> {data[i].title} </a></li>);
            i = i + 1;
        }*/

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
