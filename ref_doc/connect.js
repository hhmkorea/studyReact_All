// connect.js
// https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
function connect(mapStateToProps, mapDispatchToProps) {
    // connect 함수는 함수를 반환한다.
    return function (WrappedComponent) {
        // connect 함수의 결과값 함수는 컨테이너 컴포넌트를 리턴한다.
        return class extends React.Component {
            // 컨테이너 컴포넌트의 render 메서드에서는 WrappedComponent를 반환한다.
            render() {
                return (
                    // that renders your component
                    <WrappedComponent
                        {/* 아래 코드로 컨테이너 컴포넌트로 주입된 props를 Wrapper 컴포넌트에 전달한다  */}
                        {...this.props}
                        {/* 리덕스 store의 state를 WrapperComponent의 props로 전달한다. */}
                        {...mapStateToProps(store.getState(), this.props)}
                        {/* 이벤트를 WrapperComponent의 props로 전달한다. */}
                        {...mapDispatchToProps(store.dispatch, this.props)}
                    />
                )
            }

            componentDidMount() {
                // 컴포넌트가 적용됐을 때 호출된다. 리덕스 스토어를 구독한다.
                this.unsubscribe = store.subscribe(this.handleChange.bind(this))
            }

            componentWillUnmount() {
                // 컴포넌트가 종료됐을때 호출된다. 구독을 취소한다.
                this.unsubscribe()
            }

            handleChange() {
                // 리덕스 스토어가 변경되면 강제로 render를 호출한다.
                this.forceUpdate()
            }
        }
    }
}

// This is not the real implementation but a mental model.
// It skips the question of where we get the "store" from (answer: <Provider> puts it in React context)
// and it skips any performance optimizations (real connect() makes sure we don't re-render in vain).

// The purpose of connect() is that you don't have to think about
// subscribing to the store or perf optimizations yourself, and
// instead you can specify how to get props based on Redux store state:

const ConnectedCounter = connect(
    // Given Redux state, return props
    state => ({
        value: state.counter,
    }),
    // Given Redux dispatch, return callback props
    dispatch => ({
        onIncrement() {
            dispatch({ type: 'INCREMENT' })
        }
    })
)(Counter)