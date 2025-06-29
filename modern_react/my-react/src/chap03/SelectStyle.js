import './css/SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle({mode}) {
    return (
        // mode 속성에 따라 스타일 클래스 전환 - 문자열/배열/객체를 혼합한 스타일
        <div className={cn(
            'box', [
                'panel', // box panel light와 같은 속성 값이 생성
                {
                    light: mode === 'light', // 객체 표현 -> 스타일명:boolean 값, 값이 true인 스타일만 적용.
                    dark: mode === 'dark'
                }]
        )}>
            Hello World!
        </div>
    );
}