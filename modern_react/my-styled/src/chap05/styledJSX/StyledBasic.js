export default function StyledBasic() {
    return (
        <>
            <style jsx>
                {`
                    :global(h3) {
                        color: Red;
                    }
                    
                    .panel {
                        width: 300px;
                        padding: 10px;
                        border: 1px solid #000000;
                        border-radius: 5px;
                        background-color: royalblue;
                        color: white;
                    }
                `}
            </style>
            <div className="panel">
                <b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의 라이브러리입니다.
            </div>
        </>
    );
}