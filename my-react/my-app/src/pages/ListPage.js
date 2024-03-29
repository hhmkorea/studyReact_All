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

const ListPage = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "제목1", content: "내용1"},
        {id: 2, title: "제목2", content: "내용2"},
        {id: 3, title: "제목3", content: "내용3"},
        {id: 4, title: "제목4", content: "내용4"},
        {id: 5, title: "제목5", content: "내용5"},
    ]);

    const [no, setNo] = useState(posts.length + 1);

    const [post, setPost] = useState({
        id: no,
        title: '',
        content: '',
    });

    const handleWrite = (e) => {
        e.preventDefault();         // form 태그가 하려는 action을 중지시켜야 함.
        // console.log("no: ", no);
        // console.log("id: ", post.id);
        // console.log("title: ", post.title);
        // console.log("content: ", post.content);
        setNo(no+1);
        setPosts([...posts, {id:no, title: post.title, content: post.content}]); // posts에 신규 글쓰기한 post 더하기
    }

    const handleForm = (e) => {
        // compute property names, JS6 문법, 변수 키값을 동적으로 할당.
        setPost({
            ...post, // 기존값 유지하면서 덮어쓰기!! 안하면 기존값 없어져서 에러남.
            [e.target.name]: (e.target.name == 'id'? no : e.target.value)
        });
    }

    const handleDelete = (targetId) => {
        const newList = posts.filter((post) => post.id !== targetId);
        //console.log(newList);
        setPosts(newList); // 그냥 새로운 데이타 덮어씀.
    }

    return (
        <div>
            <h1>리스트 페이지</h1>
            <form onSubmit={handleWrite}>
                <input type="text"
                       placeholder="제목을 입력하세요..."
                       value={post.title}
                       onChange={handleForm}
                       name="title"
                />
                <input type="text"
                       placeholder="내용을 입력하세요..."
                       value={post.content}
                       onChange={handleForm}
                       name="content"
                />
                <button type="submit" >글쓰기</button>
                {/* type="button"은 submit이 안됨.*/}
            </form>
            <hr/>
            {posts.map((post) => (
                <StyledItemBoxDiv key={post.id}>
                    <div>
                        번호: {post.id} / 제목: {post.title} / 내용: {post.content}
                    </div>
                    <div>
                        <button onClick={() => {
                            //console.log(post.id);
                            handleDelete(post.id);
                        }}>삭제</button>
                    </div>
                </StyledItemBoxDiv>
            ))}
        </div>
    );
};

export default ListPage;