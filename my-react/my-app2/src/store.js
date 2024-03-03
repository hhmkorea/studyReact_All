// 액선, action
export const increase = () => ({type: "INCREMENT"});
export const decrease = () => ({type: "DECREMENT"});

// 상태, state

const initstate = {
  number: 0,
}

// 액션의 결과를 걸러내는 역할, reducer
// return 되면 그걸 호출한 쪽에서 받는게 아니라 return 되는 순간 구독한 곳 자동으로 ui 변경됨.
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1};
    case "DECREMENT":
      return { number: state.number - 1};
    default:
      return state;
  }
}

export default reducer;