## React Redux -----
 + props가 아닌 store를 이용
 + redux store 구독
 + store에 dispatch
 + 서로 간의 스토어 중심으로 상화 작용 하게 됨.
###
### 영역 분리
+ components : 프리젠테이션 영역
+ containers : 컨트롤 영역 
###
### 반복 작업을 줄여주는 API
+ connect.js : mapStateToProps, mapDispatchToProps
###
### *** Undo, Redo 같은 기능 ***
+ time traveling : 데이터의 상태를 보관하는 기능.  
+ hot reload : 코드를 바꿔도 app상태가 독립적으로 마지막 상태를 그대로 유지, 개발할때 다시 수정하고 다시 리로드하는 귀찮은 작업을 덜 수 있는 기능. 