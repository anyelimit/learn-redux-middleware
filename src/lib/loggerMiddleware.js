const loggerMiddleware = store => next => action => {
  //미들웨어(함수를 반환한하는 함수를 반환하는 함수) 기본 구조
  //store : redux store instance, action : action dispatched
  //next: store.dispatch와 비슷한 역할. next(action)을 호출-> 그다음 처리해야할 미들웨어에게 액션을 넘겨주고 없으면 리듀서에게 액션 넘겨줌
  console.group(action && action.type); //액션 타입으로 log를 그룹화
  console.log("이전 상태", store.getState);
  console.log("액션", action);
  next(action); //다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState()); //업데이트 된 상태
  console.groupEnd(); //그룹 끝
};

export default loggerMiddleware;
