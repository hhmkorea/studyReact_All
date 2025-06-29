// 로고/스타일시트 가져오기
import logo from './logo.svg';
import './App.css';
import React from "react";

// 앱 컴포넌트 정의
class AppClass extends React.Component{ // 함수명, 파스칼 표기법(PascalCase)로 표기.
  // 랜더링할 내용 생성
  render() {
    return ( // 반환값은 리엑트 요소.
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/AppClass.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Hello, React!! Class Component~
            </a>
          </header>
        </div>
    );
  }
}

// 앱 컴포넌트 내보내기 -> 다른 모듈에서 호출할 수 있게 마지막에 함수를 export로 선언해 두기.
export default AppClass;
