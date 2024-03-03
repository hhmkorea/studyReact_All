import React, { useState } from 'react';
import './App.css';
import Bottom from './components/Bottom';
import Top from './components/Top';

function App() {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
    // 상태관리를 위해 상태값인 setNumber는 다른 Component에 넘기지 말아야함.
  };
  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top number={number}/>
      <Bottom addNumber={addNumber}/> {/* 함수를 넘겨야함 */}
    </div>
  );
}

export default App;