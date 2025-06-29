import React, {useState} from "react";
import "./css/StateTodo.css"

// Todo 항목 id의 최댓값(등록할 때마다 증가)
let maxId = 0;
export default function StateTodo() {
    // 입력값(title), 할 일 목록(todl)을 State로 관리
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);
    // 다음 정렬 방향(내림차순인 경우 true)
    const [desc, setDesc] = useState(true);

    // 텍스트 상자에 입력한 내용을 State에 반영
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleClick = () => {
        // 새 할일 추가하기
        setTodo([
            ...todo, // 1. ...연산자로 원래 벼열 복제 -> push, unshift와 같은 메서드 사용할 수 없다.
            { // 2. 입력한 새로운 요소를 추가.
                id: ++maxId,
                title, // Todo 본체
                created: new Date(),
                isDone: false // 할일 완료
            }
        ]);
    }

    // [완료] 버튼으로 Todo 항목을 완료 상태로 변경
    const handleDone = e => {
      // todo 배열을 스캔하여 id 값이 같은 것을 검색
      setTodo(todo.map(item => {
          if (item.id === Number(e.target.dataset.id)) {
              // 인수대신 고유 데이터 속성 활용. ---> 인수의 값이 미리 정해져 있는 경우 사용.
              // 각 항목에 id 속성을 할당해 둔다. ---> 목록에서 특정 항목 조작할 때 꼭 필요한 기능.
              return { // 일치하는 것만 복사한 뒤, isDone 속성만 true로 변경.
                  ...item,
                  isDone: true
              };
          } else { // 그 외의 요소는 그대로 반환.
              return item;
          }
        }));
    };

    // [삭제] 버튼으로 해당 Todo 항목을 삭제
    const handleRemove = e => {
        setTodo(todo.filter(
            item => item.id !== Number(e.target.dataset.id)
        ));
    };

    const handleSort = e => {
        // 기존 Todo 목록을 복제하여 정렬하기
        const sorted = [...todo]; // State값 정렬 할때 미리 복제해두기.
        sorted.sort((m, n) => {
           // desc 값에 따라 오름차순/내림차순 결정, date 타입을 타임스탬프 값으로 변환하여 정렬
           if (desc) {
               return n.created.getTime() - m.created.getTime();
           } else {
               return m.created.getTime() - n.created.getTime();
           }
        });
        // desc 값 반전
        setDesc(d => !d); // true -> false
        // 정렬된 목록 재설정
        setTodo(sorted); // 정렬된 결과를 다시 State로 설정.
    };

    return (
        <div>
            <br/>
            <label>
                &nbsp;해야 할 일&nbsp;:&nbsp;&nbsp;
                <input type="text" name="title" value={title} onChange={handleChangeTitle} />
            </label>&nbsp;&nbsp;
            <button type="button" onClick={handleClick}>추가하기</button>&nbsp;&nbsp;
            {/* desc 값에 따라 캡션 변경 */}
            <button type="button" onClick={handleSort}>정렬({desc ? '↑' : '↓'})</button>
            <br/>
            <br/>
            <hr/>
            {/* 할 일을 목록으로 정리하기 */}
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        {/* item id : {item.id}&nbsp;&nbsp; */}
                        {/* isDone 속성이 true인 항목에 done 스타일 클래스 부여 */}
                        {item.title}&nbsp;&nbsp;
                        <button type="button" onClick={handleDone} data-id={item.id}>완료</button>&nbsp;&nbsp;
                        <button type="button" onClick={handleRemove} data-id={item.id}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}