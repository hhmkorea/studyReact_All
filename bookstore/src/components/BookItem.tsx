import type {Book} from "../data/Bookdata.ts";
import * as React from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

interface BookItemProps {
    book: Book;
}

const BookItem : React.FC<BookItemProps> = ({ book }) => {
    return (
        <Col sm={4} md={4} key={book.id} className="box p-4">
            <Card className="border rounded shadow-sm p-3" style={{ height: '500px', width: '300px' }}>
                <Card.Body>
                    <Card.Img variant="top" src={`/image/${book.id + 1}.jpg`} style={{ height: '240px', width: '173px', objectFit: 'cover' }} alt={book.title} />
                    <Card.Title className="title">{book.title}</Card.Title>
                    <div className='description'>
                        <span className='author'>작가: {book.author}</span><p></p>
                        <span className='star'>별점: {book.star}</span><p></p>
                    </div>
                </Card.Body>
                <div className="linkTo">
                    <Link to={`/detail/${book.id}`} state={{ book }}> {/* book.id에 해당하는 book 데이터를 DetailPage에 전달 */}
                        <Button variant="primary">자세히 보기</Button>
                    </Link>
                </div>
            </Card>
        </Col>
    );
}
export default BookItem;