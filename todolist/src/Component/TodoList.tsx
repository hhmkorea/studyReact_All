import '../App.css';
import {useState} from "react";
// import Timer from "./Timer.tsx";
import * as React from "react";
import Clock from "./Clock.tsx";
import TodoModal from "./TodoModal.tsx";

interface MyComponentProps {
    title: string;
}

type Todo = { // type : 사용자 정의 타입 정의
    id: number,
    text: string,
    isChecked: boolean;
}

const TodoList: React.FC<MyComponentProps> = ({title}) => {
    const [todos, setTodos] = useState<Todo[]>([ // 할일 목록 상태 데이타
        {id: 1, text: "커피마시기", isChecked: false},
        {id: 2, text: "공부하기", isChecked: false},
        {id: 3, text: "산책하기", isChecked: false},
    ]);

    const [newTodo, setNewTodo] = useState<string>(''); // 할일 신규 상태 테이타
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const handleCheckboxChange = (itemId: number) => { // 체크박스 변경
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            )
        );
    }

    const addTodo = () => { // 할일 추가
        // newTodo를 todos에 추가
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos, // 스프레드 연산자
                {id: Date.now(), text: newTodo, isChecked: false} // 추가할 데이타
            ]);
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((user) => {
            return user.id !== id; // filter 메소드 내부의 각 항목을 user로 받음.
        }))
    }

    const handleTodoClick = (todo: Todo) => {
        setSelectedTodo(todo);
        setShowDetail(true);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }
    return (
        <div className="container mt-5">
            <h1 className='titlebk'>{title}</h1>
            <div className="form-group d-flex align-items-center mb-3">
                <input type="text" className="form-control me-2" placeholder="할일 입력"
                       onChange={(e) => setNewTodo(e.target.value)}
                       value={newTodo}
                       style={{marginRight: '10px', writingMode: 'horizontal-tb'}}/>
                <button className="btn btn-success"
                        onClick={addTodo}
                        style={{whiteSpace: 'nowrap'}}>추가하기
                </button>
            </div>
            <div className="card">
                <div className="card-body">
                    <ul className='list-group'>
                        {
                            todos.map((todo) => (
                                <li key={todo.id}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" onChange={() => {
                                            handleCheckboxChange(todo.id);
                                        }}></input>
                                        <label className="form-check-label">
                                            {todo.isChecked ? <del>{todo.text}</del> : <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>}
                                        </label>
                                    </div>
                                    <button className="btn btn-danger" onClick={() => removeTodo(todo.id)}>삭제</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <br/><br/>
            <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo} /> {/* Modal 컴포넌트 팝업 호출 */}
            <Clock></Clock>
        </div>
    )
}

export default TodoList;