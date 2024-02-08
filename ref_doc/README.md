# React vs Vue.js 
###
### + Life Cycle +
+ React : React_Life Cycle_001.png 
> 출처: https://gseok.gitbooks.io/react/content/assets/react-life-cycle-2.png
+ Vue.js : Vuejs_Life Cycle_001.png 
> 인스턴스 생성과 소멸로 진행, 8가지 생명주기 Hook을 제공함. 

> 출처: https://wormwlrm.github.io/static/1d3dae65499d59846dfbfaaa7daae963/c1b63/1.png
###
### + 주요 설명 +
+ React : 페이스북에서 만든 js UI 라이브러리. Component 중심으로 UI 제작 지원.
+ Vue.js : MVVM(Model-View-ViewModel) 패턴으로 설계, 양방향 데이터 바인딩 가능.
###
### + store.js : 중앙 집중식 데이터 저장소 +
+ React : Redux 라이브러리
> 구독, 통보, 구독취소로 데이터 변화 관리. store 내부에 state값이 저장됨.
+ Vue.js : Vuex 라이브러리
> Vuex를 등록하고 뷰 인스턴스의 store 속성에 연결하여 Component 간 데이터 전달과 이벤트 통신을 한 곳에서 관리하는 패턴을 만듬.
###
###
### + 프로젝트 생성 +
+ React : Node.js 설치 후 실행
> React 프로젝트 생성
>> create-react-app .
+ Vue.js : Node.js 설치 후 실행 
> vue-cli 설치 : 빠른 프로젝트 생성, 관리 라이브러리
>> npm install -g @vue/cli c

>> npm i -g @vue/cli-init 

> Vue 프로젝트 생성 
>> vue init webpack .

or 
> npm install(교재)
###
### + 빌드 +
+ React
> npm run build
+ Vue.js
> npm run build
###
### + 실행 +
+ React :  http://localhost:8080/ 주소창 입력해야함.
> npm run start

or
> npm start
+ Vue.js : Create React App 자동실행 됨.
> npm run dev 

or 
> npm run serve(교재)