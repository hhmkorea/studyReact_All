import React from "react";

export default function EventKey() {
    // Ctrl + q로 도움말 메시지 포시
    const handleKey = e => {
        if (e.ctrlKey && e.key === 'q') {
            alert('이름은 20자 이내로 입력해 주세요.');
        }
    }

    return (
        <form>
            <label>
                이름:
                <input type="text" size="20" onKeyDown={handleKey} />
            </label>
        </form>
    );
}