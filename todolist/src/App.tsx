import * as React from "react";
import './App.css';
import TodoList from "./Component/TodoList.tsx";

// 부모 컴포넌트
const App: React.FC = () => {
    const title = "오늘 할일";

    return (
        <div className='titlebk'>
            <TodoList title={title}></TodoList>
        </div>
    )
}

export default App;