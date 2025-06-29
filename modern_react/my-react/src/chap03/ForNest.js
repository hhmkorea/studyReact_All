import ForItem from './ForItem';

export default function ForNest({src}) {

    return (
        <dl>
            {src.length > 0 && `※ 여기에는 총 ${src.length}건의 데이터가 있다.`}
            <br/>
            {src.map(elem =>
                <ForItem book={elem} key={elem.isbn} />
            )}
            <br/>
        </dl>
    );
}