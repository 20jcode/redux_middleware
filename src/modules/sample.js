// api를 사용해서 데이터를 받아와 상태를 관리

import { handleActions } from "redux-actions";
import * as api from '../lib/api';

// 액션 타입 선언 한 요청당 3개씩

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//thunk ㅏㅎㅁ수 생성
// 시작 성공 실패했을 때 다른 액션을 디스패치

export const getPost = id => async dispatch => {
    dispatch({ type: GET_POST });
    try {
        const response = await api.getPost(id);
        dispatch({
            type : GET_POST_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        });
        throw e;
        
    }
};

export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS });
    try {
        const response = await api.getUsers();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        });
        throw e;
    }
};

const initialState = {
    loading: {
        GET_POST : false,
        GET_USERS : false
    },
    post: null,
    users: null
};

const sample = handleActions(
    {
        [GET_POST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true
            }
        }),
        [GET_POST_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
            post : action.payload
        }),
        [GET_POST_FAILURE] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            }
        }),
        [GET_USERS] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS : true
            }
        }),
        [GET_USERS_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS : false
            },
            post : action.payload
        }),
        [GET_USERS_FAILURE] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS : false
            }
        })
    },
    initialState
);

export default sample;