import React from "react";
import Download from "./Download";

export default function ForItem({book}) {
    return (
        <>
            <br/>
            <dt>
                <a href={`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${book.isbn}.jpg`}>
                    {book.title} ({book.price}원)
                </a>
            </dt>
            <dt>
                <img src={`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${book.isbn}.jpg`}
                     width="200px" alt={book.isbn}/>
            </dt>
            {book.summary}
            {/*{book.download ? <Download slug={book.slug} /> : null}*/}
            {book.download && <Download isbn={book.isbn} />}
            {book.download || '(다운로드X)'}
            <br/>
        </>
    );
}