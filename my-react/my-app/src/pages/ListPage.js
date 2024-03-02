import React, {useState} from 'react';
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
    display: flex; // 정렬할 수 있음.
    justify-content: space-between; // 양 옆으로 정렬
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    align-items: center; // 아이템 왼쪽 중앙 정렬
`;

const handleWrite = () => {
    // ListPage의 setPosts에 무엇을 담아야함?
    let post = {id:6, title:"인풋값"};
}

const ListPage = () => {

    const [posts, setPost] = useState([
        {id: 1, title: "내용1"},
        {id: 2, title: "내용2"},
        {id: 3, title: "내용3"},
        {id: 4, title: "내용4"},
        {id: 5, title: "내용5"},
    ]);
    return (
        <div>
            <h1>리스트 페이지</h1>
            <form>
                <input type="text" placeholder="제목을 입력하세요..."/>
                <button type="button" onClick={handleWrite}>글쓰기</button>
                {/* type="button"은 submit이 안됨.*/}
            </form>
            <hr/>
            {posts.map((post) => (
                <StyledItemBoxDiv key={post.id}>
                    <div>
                        번호 : {post.id} 제목 : {post.title}
                    </div>
                    <div>
                        <button>삭제</button>
                    </div>
                </StyledItemBoxDiv>
            ))}
        </div>
    );
};

export default ListPage;