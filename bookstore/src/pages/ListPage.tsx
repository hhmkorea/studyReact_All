import {useEffect, useState} from "react";
import bookdata from "../data/Bookdata.ts";
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import BookItem from "../components/BookItem.tsx";

const ListPage : React.FC = () => {
    const [books, setBooks] = useState(bookdata); // books값을 bookdata로 초기호
    const [loaded, setLoaded] = useState(false); // 데이터 요청 완료 여부

    useEffect(() => {
        if (!loaded) { // loaded가 false일때만 데이터 가져오기
            axios.get('https://jamsuham75.github.io/image/data2.json')
                .then((result) => {
                    console.log(result.data);

                    const copy = [ ...books, ...result.data]; // copy 배열에 book값에 axios로 가져온 값 병합해서 넣음.
                    setBooks(copy);
                    setLoaded(true); // 데이터가 성공적으로 로드 되면 true 호출. 추가 요청이 발생되지 않음.
                })
                .catch(() => {
                    console.log('fail');
                });
        }
    }, [loaded, books]);

    return (
        <div>
            <Container>
                <div className="project_header_container">
                    <h1 className="project_header">도서 리스트</h1>
                    <div className="hr"></div>
                </div>
                <div>
                    <Row className="text-center">
                        {books.map((item, i) => (
                            <BookItem key={i} book={item}></BookItem>
                            // key 추가
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ListPage;