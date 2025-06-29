import {ErrorBoundary} from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";
import ErrorFallback from "./ErrorFallback";

export default function ErrorRetryRoot() {

    // 리셋 시 실행되는 처리
    const handelReset = () => console.log('Retry!!');

    return (
        <>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary onReset={handelReset} FallbackComponent={ErrorFallback}> {/*
                onReset : 재시도 시 수행할 핸들러 지정.
                FallbackComponent : 오류 발생 시 랜더링 콘텐츠를 컴포넌트로 지정
            */}
                <ErrorRetryThrow />
            </ErrorBoundary>
        </>
    );
}