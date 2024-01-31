# React Router DOM -----
+ react-router-dom 버전 6이상 사용중, 버전 5와 문법차이 있음 


### 1. exact 사용 안함, 대신 아래와 같이 사용.
> < Route path="test" > 에서 element를 넣지 않고, test로 시작되는 모든 라우팅을 매칭 시킨다.

### 2. switch 사용 안함, 대신 아래와 같이 사용.
> < Router > 
< Routes >
< Route path="" element="" / >
< /Routes >
< /Router >

### 3. Link 사용방식 바뀜.






### 기타 참고 사항 ------
#### 1. HashRouter 구현 시 Link 로...
> < a href="" >< /a >로 하면 구현이 안되고 < Link to="" >< /Link >로 구현해야함.
#### 2. import 할때 별칭 사용 가능.
> import {
HashRouter as Router,
Routes,
Route,
NavLink as Link,
} from "react-router-dom";

