import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const user = createSlice({ // createSlice : 상태와 리듀서 정의. --> 전역 변수
    name : 'user',
    initialState : {id : 1, name : '비르튜', job : '개발자'}, // 사용자
    reducers : { // reducers : dispatch를 통해 전달받은 action을 검사하고 state에 직접적으로 변화를 주는 함수.--> 상태 변경 함수
        changeName(state) {
            state.name = "도도";
        },
        increase(state, action) { // action --> 매개 변수
            state.id += action.payload; // payload : 상태를 변경하는 데 필요한 데이터를 담고 있는 값. 액션에 담겨 있는 데이터
        }
    }
})

export const {changeName, increase} = user.actions; // user.actions : createSlice가 자동으로 생성한 액션 생성 함수가 담긴 객체

const stock = createSlice({
    name : 'stock',
    initialState : [500, 600, 700], // 도서 재고값
    reducers : {}
})

export interface CartItem { // 카트에 담을 도서 데이터 요소
    id : number;
    name : string,
    quantity : number;
    price : number;
}

export interface CartArray { // 카트 상태
    cart : CartItem[];
}

const cart = createSlice({ // cart 상태 관리
    name : 'cart',
    initialState : {
        cart : [],
    } as CartArray,
    reducers : {
        plusCount(state, action) { // 카트 수량 증가
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity ++;
            }
        },
        minusCount(state, action) { // 카트 수량 감소
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity --;
            }
        },
        addItem(state, action) {
            // state.cart에 동일한 id를 가진 아이템이 이미 존재하는지 확인
            const existingItem = state.cart.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.price,
                });
            }
        },
        resetCart(state) {
            state.cart = [];
        },
    },
});
export const {plusCount, minusCount, addItem, resetCart} = cart.actions;

const rootReducer = combineReducers({ // 하나의 rootReducer로 상태 통합.
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
});

const persistConfig = { // redux-persist가 상태를 저장할 방법과 위치 지정.
    key: "root", // root 상태 저장할 때 사용할 키
    storage, // 상태를 저장할 storage, local storage에 데이터 저장.
};

// persistReducer : 상태를 영구 저장할 수 있는 리듀서로 전환
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore : 리덕스 스토어 생성
const store = configureStore({
    reducer: persistedReducer,
});

// persistStore : 상태를 유지하거나 초기화
export const persistor = persistStore(store);
export default store;
