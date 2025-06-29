import * as React from "react";
import '../App.css'
import {useState} from "react";
import {Button} from "react-bootstrap";

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0); // 초 단위 데이터를 저장할 변수 상태 선언

    return (
        <div className="board">
            <h4>타이머 : {seconds} 초</h4> {/* 화면에 출력 */}
            <Button onClick={() => {
                setInterval(() => { // setInterval() : 타이머 함수
                    setSeconds((prevSeconds) => { // setSeconds : 초 단위 데이터 상태 변화
                        return prevSeconds + 1
                    });
                }, 1000);
            }
            }>시작</Button>
        </div>
    )
}

export default Timer;