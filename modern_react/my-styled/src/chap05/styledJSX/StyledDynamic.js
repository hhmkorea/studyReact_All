export default function StyledDynamic( {theme} ) {
    return (
        <>
            <style jsx>{`
            .panel {
                width: 300px;
                padding: 10px;
                border: 1px solid #000;
                color: white;
            }
            `}</style>
            <style jsx>{`
            // Props에서 동적으로 설정값 생성 
            .panel {
                border-radius: ${theme.radius ? '10px' : '0px'};
                background-color: ${theme.color};
            }
            `}</style>
            <div className="panel">
                <b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의 라이브러리입니다.
            </div>
        </>
    );
}