function sleep(delay) {
    let start = Date.now();
    while (Date.now() - start < delay);
}

// delay 밀리초 지연 발생
export default function HeavyUI({ delay }) {
    sleep(delay);
    return <p>지연 시간은 {delay}밀리초</p>
}