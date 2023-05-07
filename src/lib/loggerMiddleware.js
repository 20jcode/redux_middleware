const loggerMiddleware = store => next => action => {
    console.group(action && action.type); // action type으로 로그를 그룹화?
    console.log('이전 상태', store.getState());
    console.log('action : ',action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); // 업데이트 된 상태
    console.groupEnd();
}; // 이전 상태, 액션 정보, 새로워진 형태 를 순차적으로 콘솔에 보여줌

export default loggerMiddleware;