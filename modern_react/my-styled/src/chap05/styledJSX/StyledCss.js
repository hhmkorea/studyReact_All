import css, {globalCss, resolveCss} from './StyledCss.css';

export default function StyledCss() {
    return (
        <>
            {/* 외부 스타일 가져오기 */}
            <style jsx>{css}</style>
            <style jsx>{globalCss}</style>
            {resolveCss.styles}
            <div className={`panel ${resolveCss.className}`}>
                <b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의 라이브러리입니다.
            </div>
        </>
    );
}