import React, {lazy, Suspense} from "react";
import MyLoading from "./MyLoading";

// ms 밀리초의 지연을 발생시키는 sleep 함수
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// LazyButton 지연 로드
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(2000).then(() => import('./LazyButton2')));

export default function LazyMulti() {
    // LazyButton이 로딩될 때까지 메세지를 표시한다.
    return (
        <Suspense fallback={<MyLoading />}> {/* lazy 함수에  <Suspense> 요소는 필수, fallback에 대기 상태로 표시할 콘텐츠 지정 */}
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    );
}