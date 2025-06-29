import {ErrorBoundary} from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";

export default function ErrorRoot() {
    return (
        <>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary fallback={<div>오류가 발생했다.</div>}> {/* 오류가 발생할 수 있는 역역을 묶고 fallback으로 출력할 콘텐츠 지정 */}
                <ErrorThrow />
            </ErrorBoundary>
        </>
    );
}