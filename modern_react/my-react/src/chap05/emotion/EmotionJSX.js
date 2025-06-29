/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

export default function EmotionJSX() {
    const styles = css`
        width: 300px;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        background-color: royalblue;
        color: white;
    `;
    const others = css`
        font-style: italic;
    `;
    const plus = css ` // 스타일의 계승 
        ${styles}
        margin: 20px;
    `;

    return (
        <div css={plus}> {/* <div css={[styles, others]}>  */}
            <b>Emotion JSX</b>는 Styled-JSX와 비슷한 방식으로 작성이 가능하며 표현력이 자유로운 특징이 있는 라이브러리입니다.
        </div>
    );
}