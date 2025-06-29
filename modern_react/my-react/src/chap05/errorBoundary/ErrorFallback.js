export default function ErrorFallback({ error, resetErrorBoundary }) {
    const handleClick = () => resetErrorBoundary();
    return (
        <div>
            <h4>다음 오류가 발생했습니다2</h4>
            <p>{error.message}</p>
            <button type="button" onClick={handleClick}>
                Retry
            </button>
        </div>
    );
}