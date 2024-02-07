# React Router DOM
+ react-router-dom 버전 6이상 사용중, 버전 5와 문법차이 있음 
###
### 1. exact 사용 안함, 대신 아래와 같이 사용.
> < Route path="test" > 에서 element를 넣지 않고, test로 시작되는 모든 라우팅을 매칭 시킨다.
### 2. switch 사용 안함, 대신 아래와 같이 사용.
> < Router > 
< Routes >
< Route path="" element="" / >
... 생략 ...
< /Routes >
< /Router >
### 3. Link 사용방식 바뀜.
##
### *** 컴포넌트 정리 ***
+ BrowserRouter : History 객체를 생성하고, 초기 위치를 상태로 만들고, URL을 참조한다.
+ HashRouter : URL에 #이 붙는다.
+ Link : 페이지가 리로드 되지 않게 자동으로 구현하는 컴포넌트
+ NavLink : 네비게이션에 사용자가 위치한 곳을 표시해주는 class="active" 속성이 추가됨.
# 
### *** 참고 기술 ***
+ Server Rendering : 서버 사이드 렌더링, 검색 엔진에서 사용, 서버 쪽에서 Node.js 같은 기술로 웹페이지 생성, 최종적으로 정적인 HTML로 만듬.
+ Code Splitting : 페이지나 컴포넌트를 적당히 쪼개서 필요할 때마다 로드하게 하는 성능향상 및 자원 절약 기술.

### *** 기타 참고 사항 ***
#### 1. HashRouter 구현 시 Link 로...
> < a href="" >< /a >로 하면 구현이 안되고 < Link to="" >< /Link >로 구현해야함.
#### 2. import 할때 별칭 사용 가능.
> import {
HashRouter as Router,
Routes,
Route,
NavLink as Link,
} from "react-router-dom";
#### 3. < Router > < /Router > 는 한 번만 사용 가능.
> function App() {
return (
< Router >
< div className="App" >
 ... 생략 ... 
< /div >
< /Router >
);
}
#### 4. 하위 컴포넌트 표현할때 
+ 상위 경로의 Route를 정의한 뒤 아래에 하위 경로의 Route를 다음과 같이 표현한다.
>< Routes >
    < Route path="/topics" element={<Topics/>}/ >
        < Route path=":topic_id" element={<Topic/>}/ > 
< /Routes >

