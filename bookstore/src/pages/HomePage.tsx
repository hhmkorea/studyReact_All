import {useState} from "react";
import bookdata, {type Book} from "../data/Bookdata.ts";
import MyCarousel from "../components/Carousel.tsx";
import {Container, Row} from "react-bootstrap";
import BookItem from "../components/BookItem.tsx";

const HomePage : React.FC = () => {
    const [books] = useState<Book[]>(bookdata);
    return (
        <div>
            <MyCarousel></MyCarousel>

            <Container>
                <div className="project_header_container">
                    <h1 className="project_header">베스트셀러</h1>
                    <div className="hr"></div>
                </div>
                <Row className="text-center">
                    {books.map((book) => {
                        return <BookItem key={book.id} book={book}/>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;