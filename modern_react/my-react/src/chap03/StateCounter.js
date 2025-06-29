import  './css/StateCounter.css';

export default function StateCounter({ step, onUpdate }) {
    // 버튼 클릭으로 상위 State(count)에 step 값만큼 추가
    const handleClick = () => onUpdate(step);
    return (
        <button className="cnt" onClick={handleClick}>
            <span>{step}</span>
        </button>
    );
}