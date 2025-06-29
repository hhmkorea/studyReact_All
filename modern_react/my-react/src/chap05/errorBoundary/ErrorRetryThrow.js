export default function ErrorRetryThrow() {
    // 60% 확률로 오류 발생
    if (Math.random() < 0.6) {
        throw new Error('Error is occured in MyApp.');
    }

    return (
        <p>잘 실행되었다.</p>
    );
}