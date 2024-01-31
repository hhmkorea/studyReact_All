# React Router DOM 
------------------------------


## react-router-dom 버전 6이상 사용중, 버전 5와 문법차이 있음 -----


### 1. exact 없이 대신 아래와 같이 사용.
> < Route path="test" > 에서 element를 넣지 않고, test로 시작되는 모든 라우팅을 매칭 시킨다.

### 2. switch 없어짐.

### 3. Link 사용방식 바뀜.
+ HashRouter 실습 중 확인된 내용 :
> < a href="" >< /a >로 하면 구현이 안되고 < Link to="" >< /Link >로 구현해야함.

