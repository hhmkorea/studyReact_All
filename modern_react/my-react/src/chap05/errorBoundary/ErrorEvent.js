import {useErrorBoundary} from "react-error-boundary";

export default function ErrorEvent() {
    const { showBoundary } = useErrorBoundary(); // 1. Error Boundary 연산을 위한 함수 가져욤.
    const handleClick = () => {
        try {
            throw new Error('Error is occured in MyApp.');
        } catch (e) {
            // 핸들러 내에서 발생한 예외를 Error Boundary로 넘긴다.
            showBoundary(e); // 2. try~catch로 묶어서 catch 영역에 showBoundary() 호출.
        }
    }
    return (
        <button type="button" onClick={handleClick}>
            오류발사
        </button>
    );
}