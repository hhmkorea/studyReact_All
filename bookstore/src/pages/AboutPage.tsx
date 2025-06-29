import {Col, Container, Row} from "react-bootstrap";
import {useEffect} from "react";

const AboutPage : React.FC = () => {
    useEffect(() => { // useEffect : 컴포넌트가 처음 렌더링 될 때 한번만 실행하도록 사용
        const observer = new IntersectionObserver((entries) => { // IntersectionObserver : 브러우저의 API로 특정 요소가 화면에 들어오거나 벗어나는지 여부 관찰.
            entries.forEach((entry) => { // entries : 각 요소에 대한 정보가 포함된 배열
                if (entry.isIntersecting) { // isIntersecting : 해당 요소가 화면 안에 있는지 여부
                    entry.target.classList.add('show'); // 애니메이션 적용
                } else {
                    entry.target.classList.remove('show'); // 애니메이션 제거 
                }
            });
        });
        const elements = document.querySelectorAll('.hidden'); // .hidden 클래스를 가진 모든 요소를 선택.
        elements.forEach((el) => observer.observe(el)); // observer.observe(el) : 각 요소를 관찰 리스트에 추가.
    }, []);

    return (
        <>
            <Container>
                <Row className="align-items-center"> {/* align-items-center : 수평 정렬, Row 내부의 모든 콘텐츠를 수직으로 가운데 정렬, 두 필드가 같은 높이에 위치하도록 한다.  */}
                    {/* 소개 섹션 */}
                    <Col md={6} className='header_left hidden'> {/* md={6} : 12개 그리드 중 6개를 차지하도록 설정, hidden : 초기 랜더링 시 적용 */}
                        <header className='header_left_intro'>새로운 일에 도전 중인 비르튜.</header>
                        <header className='header_left_introduce'>안녕하세요.</header>
                        <header className='header_left_introduce'>비르튜입니다.</header>
                        <div className='header_left_introduce_body_container'>
                            <span className='header_left_introduce_body'>안녕하세요. 비르튜입니다.</span><br />
                            <span className='header_left_introduce_body'>익숙했던 일에서 새로운 일에 도전중입니다.</span><br />
                        </div>

                        {/* 버튼 섹션 */}
                        <div className='btn_header_container'>
                        <a href='https://blog.naver.com/test000_'>
                                <button className='btn_header btnHover'>블로그</button>
                            </a>
                        </div>
                    </Col>

                    {/* 이미지 섹션 */}
                    <Col md={6}>
                        <img src='/image/member.jpg' width={"80%"} alt="대표 이미지" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutPage;