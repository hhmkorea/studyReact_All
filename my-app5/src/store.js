import { legacy_createStore as createStore} from "redux";

export default createStore(function (state, action) {
    if(state === undefined) {
        return {number:0}
    }
    if(action.type === 'INCREMENT') {
        return {...state, number: state.number + action.size}
        // ...state : 구조 분해 할당. Destructuring assignment
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 개발자 도구에서 redux를 추가 해주는 것.
