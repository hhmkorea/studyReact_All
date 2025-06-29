// 모듈(Module) : Javascript(JS)의 모듈은 하나의 파일로 묶는 것이 보통. 파일 이름이 그대로 모듈 이름으로 간주된다.
// 하위 멤버는 기본적으로 모듈 외부에 비공개로 설정되어 있다. 외부에서 접근하려면
// export 키워드를 부여하여 명시적으로 접근을 허용해야함.

const APP_TITLE = 'React 앱'; // 모듈 내에서만 사용할 수 있다.

export function getTriangle(base, height) {
    return base * height / 2;
}

export class Article {
    getAppTitle() {
        return APP_TITLE;
    }
}