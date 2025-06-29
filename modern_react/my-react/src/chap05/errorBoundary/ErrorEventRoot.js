import {ErrorBoundary} from "react-error-boundary";
import ErrorEvent from "./ErrorEvent";

export default function ErrorEventRoot() {

    // 오류 발생시 실행되는 처리
    const handleFallback = ({ error, resetErrorBoundary }) => {
        const handelClick = () => resetErrorBoundary();
        return (
            <div>
                <h4>다음 오류가 발생했다.1</h4>
                <p>{error.message}</p>
                <button type="button" onClick={handelClick}>
                    Retry
                </button>
            </div>
        );
    };
    // 리셋 시 실행되는 처리
    const handelReset = () => console.log('Retry!!');

    return (
        <>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary onReset={handelReset} fallbackRender={handleFallback}>
                <ErrorEvent />
            </ErrorBoundary>
        </>
    );
}