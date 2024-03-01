import React from 'react';
import styled from "styled-components";

let StyledDeleteButton = styled.button`
    color: ${(props) => (props.username === 'ssar'?'blue':'red')};
`;

// 스타일 확장
let StyledAddButton = styled(StyledDeleteButton)`
    color: ${(props) => (props.username === 'ssar'?'blue':'red')};
    background-color: green;
`;

const Home = (props) => {
    // 구조분할 할당
    const { boards, setBoards, user } = props;

    return (
        <div>
            <StyledAddButton user={user}>더하기</StyledAddButton>
            <StyledDeleteButton user={user} onClick={() => setBoards([])
            }>전체삭제</StyledDeleteButton>
            {boards.map((board) => (
                <div key={board.id}> {/* 고유의 key 값을 넣어줘야 함. */}
                    <h3> 제목 : {board.title} 내용 : {board.content} </h3>
                </div>
            ))}
        </div>
    );
};

export default Home;