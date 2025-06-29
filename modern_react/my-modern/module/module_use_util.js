import Util from "./Util.js";
// import Util, { getTriangle } from "./Util.js"; // 기본 멤버를 다른 멤버와 함께 일괄로 가져올 수도 있다.

console.log(Util.getCircleArea(10));


// 4. 선언과 익스포트 분리하기 : export 선언만 따로 떼어낼 수도 있다.
function getTriangle1(base, height) {
    // ...
}

class Article1 {
    // ...
}

export { getTriangle1, Article1 };