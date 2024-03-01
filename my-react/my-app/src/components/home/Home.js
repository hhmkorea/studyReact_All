import React from 'react';
import styled from "styled-components";

// props를 부모로 부터 받으니 밖에 스타일 조건을 넣음.
let StyledDeleteButton = styled.button`
    color: ${(props) => (props.username === 'ssar'?'blue':'red')};
`;

const Home = (props) => {
    // 구조분할 할당
    const { boards, setBoards, user } = props;

    return (
        <div>
            <StyledDeleteButton user={user} onClick={() => setBoards([])
            }>전체삭제</StyledDeleteButton>
            {boards.map((board) => (
                <h3> 제목 : {board.title} 내용 : {board.content} </h3>
            ))}
        </div>
    );
};

export default Home;