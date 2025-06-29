import React from "react";

export default function wrapPromise(promise) { // Promise Wrapper
    // Promise 상태 관리(pending, fullfilled, rejected)
    let status = 'pending';
    // Promise에서 받은 데이터
    let data;
    // 원래의 Promise에 후처리 부여
    let wrapper = promise.then(
      // 성공 시 status를 fulfilled(성공), data에 취득한 데이터를 설정
      result => {
          status = 'fulfilled'; // 성공
          data = result;
      },
        // 실패 시 status를 rejected(실패), data에 에러 객체를 설정
        e => {
          status = 'rejected'; // 실패
          data = e;
        }
    );
    // 반환값은 Promise의 상태에 따라 값을 반환하는 get 메서드를 가진 객체
    return {
        get() { // status에 따라 처리를 분기하는 get()
            switch (status) {
                case 'fulfilled':
                    return data; // 성공 시 실제 데이터를 반환
                case 'rejected':
                    throw data; // 실패 시 에러 발생
                case 'pending':
                    throw wrapper; // 완료하기 전에 Promise를 throw
                default:
                    break;
            }
        }
    };
}