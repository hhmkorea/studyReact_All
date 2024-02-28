
import './App.css';

// 0. React 엔진 - 데이터 변경 감지해서 UI 그려줌. Observer Pattern
// 1. 실행과정 (index.html) - SPA, Single page App
// 2. JSX 문법 : JS에 HTML을 넣는 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야함.
// (3) if 사용 불가능 -> 삼항 연산자 ( 조건? 값(true) : 값(false) )
// (4) 조건부 렌더링 ( 조건?? 값(true) )
// (5) css디자인
//    - 내부에 적는 방법 -- style={mystyle} ---> 비추!!!
//    - 외부 파일에 적는 방법 -- className="box-style" -- App.css
//    - 라이브러리 사용(bootstrap, component-styled)

let a = 10; // 변수
const b = 20; // 상수
function App() {

  // function hello() {
  //   let b= 20; // var로 하면 밖에서도 쓰게됨. 무조건 let으로 써야함.
  // }
  let c;
  let d = undefined;
  console.log(1,c);

  const mystyle = {
    color: "red",
  };

  return (
      <div>
        <div style={mystyle}>안녕 {a === 10 ? '10입니다.' : '10이 아닙니다.'}</div>
        {/* == 값만 검사함, === 값과 타입까지 검사함. */}
        <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
        {/* false 는 안보여줌 */}
        <hr />
      </div>
      // <h1>해딩태그</h1> // 에러!! React는 하나의 태그만 리턴함.
  );
}

export default App;
