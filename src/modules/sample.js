import * as api from "../lib/api";
import { handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";

//액션 타입을 선언
//한 요청당 세개를 만들어야함
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//thunk 함수 생성
//thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

//초기상태 선언
//요청의 로딩 중 상태는 loading이라는 객체에서 관리
const initialState = {
  post: null,
  users: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      post: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      users: action.payload
    })
  },
  initialState
);

export default sample;
