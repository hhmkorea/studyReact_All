// 5. 동적 임포트
// 초기 실행에 필요하지 않거나 조건에 따라 반드시 사용하지 않는 모듈 가져오는 경우 사용을 고려해 볼 수 있다.

import ('./App.js').then(app => {
    // App.js 모듈을 비동기적으로 임포트, 임포트가 완료되면 then 메서드 하위의 콜백 함수 실행.
    // 'app.~' 형식으로 모듈에서 제공하는 멤버에 접근할 수 있음.
   console.log(app.getTriangle(10,5));

   const a = new app.Article();
   console.log(a.getAppTitle());
});