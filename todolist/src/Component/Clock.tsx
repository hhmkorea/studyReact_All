import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date()); // 현재 시간 설정 상태 데이타

    // useEffect : UI 랜더링과 1초에 시간을 업데이트하는 타이머 기능이 동시에 동작해야 하므로 타이머 기능을 처리하도록 함.
    useEffect(() => { // 리액트 컴포넌트가 렌디링될 때와 언마운트될 때 동작.
        const intervalId = setInterval(() => { // 타이머
            setTime(new Date()); // 현재 시간 업데이트
        }, 1000);

        return() => { // useEffect에서 return 문은 cleanup 함수로 사용됨.
            clearInterval(intervalId); // 타이머 정리
        }
    }, []); // [] : 다시 실행 안됨.

    return(
        <div className="board">
            <Row className="justify-content-center mt-4">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded mb-4">
                        <h4>날씨 예보</h4>
                        <p>현재 날씨: 맑음, 25ºC</p>
                        <h4>현재 시각</h4>
                        <p>{time.toLocaleTimeString()}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Clock;