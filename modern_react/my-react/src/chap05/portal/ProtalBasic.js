import {useState} from "react";
import {createPortal} from "react-dom";
import './css/PortalBasic.css';

export default function ProtalBasic() {
    // 다이얼로그 창의 개폐 상태를 나타내는 State(false로 닫힌 상태)
    const [show, setShow] = useState(false);
    // 버튼 클릭 시 핸들러(State 켜기/끄기)
    const handleDialog = () => setShow(s => !s);

    return (
        <form>
            <button type="button" onClick={handleDialog} disabled={show}> {/* show값이 true 이면 실행 */}
                다이얼로그 표시
            </button>
            {show && createPortal( // createPortal() : 포털의 핵심, 지정된 리액트 요소(children)를 지정된 영역(domNode)에 넘겨주는 역할을 한다. id="dialog"인 요소에 아래의 <div>영역을 삽입하라는 의미
                <div className="dialog">
                    <p>Portal에서 생성된 대화상자</p>
                    <button type="button" onClick={handleDialog}>
                        닫기
                    </button>
                </div>,
                document.getElementById('dialog')
            )}
        </form>
    );
}