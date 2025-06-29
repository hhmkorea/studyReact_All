import React, {useState} from "react";

export default function EventError({ src, alt }) {
    const [path, setPath] = useState(src);
    // 이미지를 불러올 수 없는 경우 오류 이미지 표시
    const handleError = () => setPath('./image/noimage.jpg');
    return (
        <img src={path} alt={alt} onError={handleError} />
    );
}