// 로고/스타일시트 가져오기
import logo from './logo.svg';
import './App.css';

// 앱 컴포넌트 정의
function App() { // 함수명, 파스칼 표기법(PascalCase)로 표기.
  // 랜더링할 내용 생성
  return ( // 반환값은 리엑트 요소.
    <div className="App">
      <header className="App-header">
        <p>
          Hello, React!! Function Component~
        </p>
      </header>
    </div>
  );
}

// 앱 컴포넌트 내보내기 -> 다른 모듈에서 호출할 수 있게 마지막에 함수를 export로 선언해 두기.
export default App;
