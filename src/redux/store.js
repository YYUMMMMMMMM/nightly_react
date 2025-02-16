import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import renderSlice from "./slices/renderSlice";

const preloadedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        auth: authReducer, // 사용자 로그인 정보 저장. 브라우저의 Local Storage에 저장
        render: renderSlice, // 재렌더 요청 상태 변수
    },
    preloadedState: { // 초기 상태로 로드
        auth : preloadedState || { isLoggedIn: false },
    },
});

// 상태 변경 시 Local Storage에 저장
store.subscribe(() => {
    saveToLocalStorage({auth: store.getState().auth, expirationTime: store.getState().expirationTime});
});

export default store;