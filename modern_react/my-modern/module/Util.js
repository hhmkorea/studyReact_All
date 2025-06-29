export default class Util { // 3. 기본 내보내기를 가져오기 : export default 키워드로 모듈 하나당 하나의 기본 내보내기를 설정할 수 있다.
    static getCircleArea(radius) {
        return (radius ** 2) * Math.PI; // radius * radius 식으로 2번 곱하고 * Math.PI
    }
}